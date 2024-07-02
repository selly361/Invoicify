'use server'

import { User } from '@/Lib/Models'
import { connectToDB } from '../mongoose'
import { Invoice as InvoiceType } from '@/Types'
import { handleDBErrors, getSessionUserId } from '@/Utils'

export async function createUser(userId: string) {
	try {
		await connectToDB()
		const existingUser = await User.findOne({ userId })

		if (existingUser) {
			console.log('User already exists')
			return existingUser
		}

		const newUser = new User({ userId })
    
		await newUser.save()

		console.log('User created successfully')
		return newUser
	} catch (error) {
		handleDBErrors(error, 'Error creating user')
	}
}

export async function fetchUserInvoices() {
	try {
		await connectToDB()
		const userId = await getSessionUserId()

		const user = await User.findOne({ userId }).populate('invoices')
		if (!user) {
			console.error('User not found')
			return []
		}

		return user.invoices as InvoiceType[]
	} catch (error) {
		console.error('Error fetching invoices', error)
	}
}

export const dynamic = "force-dynamic"