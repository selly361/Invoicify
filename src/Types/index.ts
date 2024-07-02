import { InvoiceSchema } from '@/Lib/Schemas'
import { z } from 'zod'


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
	value: string
	label: string
}

type Status = 'paid' | 'pending' | 'draft'

interface Invoice  {
	_id?: string
	invoiceId: string
	senderAddress: Address
	clientName: string
	clientEmail: string
	clientAddress: Address
	status: Status
	createdAt: Date
	paymentDue: Date
	paymentTerms: PaymentTerms
	description: string
	items: Item[]
}

type FormValues = z.infer<typeof InvoiceSchema>

export type { Address, Item, Invoice, PaymentTerms, FormValues, Status }