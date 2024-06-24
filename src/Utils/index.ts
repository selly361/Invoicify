import ShortUniqueId from 'short-unique-id'

export const addDays = (date: Date, days: number) => {
	const result = new Date(date)
	result.setDate(result.getDate() + days)
	return result
}

export const generateCustomId = () => {
	const uidLetters = new ShortUniqueId({dictionary: 'abcdefghijklmnopqrstuvwxyz'.split('')})
	const letters = uidLetters.randomUUID(3)

	const uidNumbers = new ShortUniqueId({ dictionary: '0123456789'.split('') })
	const numbers = uidNumbers.randomUUID(3)

	return `${letters}${numbers}`
}

