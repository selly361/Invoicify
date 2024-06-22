import { InvoiceSchema } from "@/Lib/Schemas"
import { z } from "zod"

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

interface PaymentTerms {
	value: '1' | '7' | '14' | '30'
	label: string
}

interface Invoice {
	senderAddress: Address
	clientName: string
	clientEmail: string
	clientAddress: Address
	createdAt: Date
	paymentTerms: PaymentTerms
	description: string
	items: Item[]
}

type FormValues = z.infer<typeof InvoiceSchema>


export type { Address, Item, Invoice, PaymentTerms, FormValues }