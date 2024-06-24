'use server'

import { User } from '@/Lib/Models'
import { connectToDB } from '../mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

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

		console.error('Error creating user', error)

		throw new Error('Could not create user')

	}
}

export async function fetchUserInvoices() {

	try {

		await connectToDB()

        const session = await getServerSession(authOptions)

		if (!session?.user?.id) {
			console.error('Session or user ID not found')
			throw new Error('Not authenticated')
		}

		const user = await User.findOne({ userId: session.user.id }).populate(
			'invoices'
		)

		if (!user) {
			throw new Error('User not found')
		}

		const invoices = user.invoices
		return invoices

	} catch (error: any) {

		console.error('Error fetching invoices:', error.message)
		throw new Error('Could not fetch invoices')

	}
}
