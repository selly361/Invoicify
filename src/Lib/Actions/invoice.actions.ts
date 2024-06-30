'use server'

import type { Invoice as InvoiceType } from '@/Types'
import { connectToDB } from '../mongoose'
import { User, Invoice } from '@/Lib/Models'
import {
	addDays,
	generateCustomId,
	getSessionUserId,
	handleDBErrors
} from '@/Utils'
import { revalidatePath } from 'next/cache'
import { InvoiceSchema } from '../Schemas'
import { redirect } from 'next/navigation'

async function createInvoice(invoiceData: InvoiceType) {
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

async function createInvoiceDraft(invoiceData: InvoiceType) {
	try {
		await connectToDB()
		const userId = await getSessionUserId()

		const invoice = new Invoice({
			...invoiceData,
			status: 'draft',
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
		handleDBErrors(error, 'Error creating invoice draft')
	}
}

async function updateInvoice(newInvoice: InvoiceType) {
	try {
		if (!newInvoice._id) throw new Error('Invoice _id is required')

		const response = InvoiceSchema.safeParse(newInvoice)
		if (!response.success || newInvoice.status === 'paid') throw new Error('Invalid invoice data')

		const updatedInvoice = await Invoice.findByIdAndUpdate(
			newInvoice._id,
			{...newInvoice, status: 'pending'},
			{ new: true }
		)
		if (!updatedInvoice) throw new Error('Invoice not found')

		revalidatePath('/')
		revalidatePath(`/invoices/${newInvoice.invoiceId}`)
	} catch (error) {
		handleDBErrors(error, 'Error updating invoice')
	}
}

async function deleteInvoice(invoiceObjectId: string) {
	try {
		await connectToDB()

		const deletedInvoice = await Invoice.findOneAndDelete({
			id: invoiceObjectId
		})

		if (!deletedInvoice) throw new Error('Invoice not found')

		await User.updateMany(
			{ invoices: invoiceObjectId },
			{ $pull: { invoices: invoiceObjectId } }
		)

		revalidatePath('/', 'page')
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

		const invoice: InvoiceType | undefined = user.invoices.find(
			(invoice: InvoiceType) => invoice.invoiceId === invoiceId
		)

		if (!invoice) {
			console.error('Invoice not found')
			return
		}

		return JSON.parse(JSON.stringify(invoice))
	} catch (error) {
		handleDBErrors(error, 'Error fetching invoice')
	}
}

async function markInvoicePaid(invoiceObjectId: string) {
	try {
		if (!invoiceObjectId) console.error('Invoice _id is required')

		const invoice = await Invoice.findById(invoiceObjectId)

		if (invoice.status === 'draft' || invoice.status === 'paid') {
			console.error("Can't change status to paid")
			return
		}

		const updatedInvoice = await Invoice.findByIdAndUpdate(
			invoiceObjectId,
			{
				status: 'paid'
			},
			{ new: true }
		)

		if (!updatedInvoice) throw new Error('Invoice not found')

		revalidatePath('/')
		revalidatePath(`/invoices/${updatedInvoice.invoiceId}`)
	} catch (error) {
		handleDBErrors(error, 'Error marking invoice as paid')
	}
}

export {
	createInvoice,
	fetchInvoice,
	updateInvoice,
	deleteInvoice,
	markInvoicePaid,
	createInvoiceDraft
}
