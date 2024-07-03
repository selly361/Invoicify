export const handleDBErrors = (error: any, message: string) => {
	console.error(message, error)
	throw new Error(message)
}