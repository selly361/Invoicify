import { z } from 'zod'

const AddressSchema = z.object({
	street: z.string().trim().min(1, '- All fields must be filled.'),
	city: z.string().trim().min(1, '- All fields must be filled.'),
	postCode: z.string().trim().min(1, '- All fields must be filled.'),
	country: z.string().trim().min(1, '- All fields must be filled.')
})

const ItemSchema = z.object({
	name: z.string().trim().min(1, '- All fields must be filled.'),
	quantity: z.number().positive('- Invalid input.'),
	price: z.number().positive('- Invalid input.'),
	total: z.number().optional()
})

const InvoiceSchema = z.object({
	invoiceId: z.string(),
	senderAddress: AddressSchema,
	clientName: z.string().trim().min(1, '- All fields must be filled.'),
	clientEmail: z
		.string()
		.trim()
		.email('- Invalid email.')
		.min(1, '- All fields must be filled.'),
	clientAddress: AddressSchema,
	createdAt: z.date(),
	paymentDue: z.date(),
	status: z.string(),
	paymentTerms: z.object({
		value: z.string(),
		label: z.string()
	}),
	description: z.string().trim().min(1, '- All fields must be filled.'),
	items: z.array(ItemSchema).min(1, '- An item must be added.').max(5)
})

export default InvoiceSchema