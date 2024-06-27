'use server'

import type { Invoice as InvoiceData } from '@/Types'
import { connectToDB } from '../mongoose'
import { User, Invoice } from '@/Lib/Models'
import { addDays, generateCustomId, getSessionUserId, handleDBErrors } from '@/Utils'
import { ObjectId } from 'mongoose'
import { revalidatePath } from 'next/cache'
import { InvoiceSchema } from '../Schemas'

async function createInvoice(invoiceData: InvoiceData) {
	try {
		await connectToDB()
		const userId = await getSessionUserId()

		const response = InvoiceSchema.safeParse(invoiceData)
		if (!response.success) throw new Error('Invalid invoice data')

		const invoice = new Invoice({
			...invoiceData,
			paymentDue: addDays(
				invoiceData.paymentDue,
				Number(invoiceData.paymentTerms.value)
			),
			invoiceId: generateCustomId()
		})
		await invoice.save()

		await User.findOneAndUpdate(
			{ userId },
			{ $addToSet: { invoices: invoice._id } },
			{ upsert: true }
		)
		revalidatePath('/')
	} catch (error) {
		handleDBErrors(error, 'Error creating or updating invoice')
	}
}

async function updateInvoice(newInvoice: InvoiceData) {
	try {
		if (!newInvoice._id) throw new Error('Invoice _id is required')

		const updatedInvoice = await Invoice.findByIdAndUpdate(
			newInvoice._id,
			newInvoice,
			{ new: true }
		)
		if (!updatedInvoice) throw new Error('Invoice not found')
		
		revalidatePath('/')
		revalidatePath(`/invoices/${newInvoice.invoiceId}`)
	} catch (error) {
		handleDBErrors(error, 'Error updating invoice')
	}
}

async function deleteInvoice(invoiceObjectId: ObjectId) {
	try {
		await connectToDB()

		const deletedInvoice = await Invoice.findByIdAndDelete(invoiceObjectId)
		if (!deletedInvoice) throw new Error('Invoice not found')

		await User.updateMany(
			{ invoices: invoiceObjectId },
			{ $pull: { invoices: invoiceObjectId } }
		)

		revalidatePath('/')
		return deletedInvoice
	} catch (error) {
		handleDBErrors(error, 'Error deleting invoice')
	}
}

async function fetchInvoice(invoiceId: string) {
	try {
		await connectToDB()
		const userId = await getSessionUserId()

		const user = await User.findOne({ userId }).populate({
			path: 'invoices',
			match: { invoiceId }
		})
		if (!user) throw new Error('User not found')

		const invoice = user.invoices.find(
			(invoice: InvoiceData) => invoice.invoiceId === invoiceId
		)
		if (!invoice) throw new Error('Invoice not found')

		return JSON.parse(JSON.stringify(invoice))
	} catch (error) {
		handleDBErrors(error, 'Error fetching invoice')
	}
}

export { createInvoice, fetchInvoice, updateInvoice, deleteInvoice }
