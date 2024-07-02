import ShortUniqueId from 'short-unique-id'
import { Item } from '@/Types'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/Constants'

export const addDays = (date: Date, days: number) => {
	const result = new Date(date)
	result.setDate(result.getDate() + days)
	return result
}

export const generateCustomId = () => {
	const uidLetters = new ShortUniqueId({
		dictionary: 'abcdefghijklmnopqrstuvwxyz'.split('')
	})
	const letters = uidLetters.randomUUID(2)

	const uidNumbers = new ShortUniqueId({ dictionary: '0123456789'.split('') })
	const numbers = uidNumbers.randomUUID(4)

	return `${letters}${numbers}`.toUpperCase()
}

export const formatDate = (date: Date) => {
	return new Date(date)?.toISOString().split('T')[0]
}

export const totalPriceOfItems = (items: Item[]) => {
	const total = items.reduce((a, b) => (a += b.total), 0)
	return total
}


export const getSessionUserId = async () => {
	const session = await getServerSession(authOptions)
	if (!session?.user?.id) {
		console.error('Session or user ID not found')
		throw new Error('Not authenticated')
	}
	return session.user.id
}

export const handleDBErrors = (error: any, message: string) => {
	console.error(message, error)
	throw new Error(message)
}
