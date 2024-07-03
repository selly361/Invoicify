import ShortUniqueId from "short-unique-id"

export const generateCustomId = () => {
	const uidLetters = new ShortUniqueId({
		dictionary: 'abcdefghijklmnopqrstuvwxyz'.split('')
	})
	const letters = uidLetters.randomUUID(2)

	const uidNumbers = new ShortUniqueId({ dictionary: '0123456789'.split('') })
	const numbers = uidNumbers.randomUUID(4)

	return `${letters}${numbers}`.toUpperCase()
}