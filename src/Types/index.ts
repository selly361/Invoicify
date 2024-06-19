interface Address {
	street: string
	city: string
	postCode: string
	country: string
}

interface Item {
	name: string
	quantity: number
	price: number
	total: number
}

interface Invoice {
	senderAddress: Address
	clientName: string
	clientEmail: string
	clientAddress: Address
	createdAt: Date
	paymentTerms: '1' | '7' | '14' | '30'
	description: string
	items: Item[]
}

export type { Address, Item, Invoice }