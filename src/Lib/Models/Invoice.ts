import { Item } from '@/Types'
import { Schema, model, models } from 'mongoose'

const AddressSchema = new Schema({
	street: {
		type: String
	},
	city: {
		type: String
	},
	postCode: {
		type: String
	},
	country: {
		type: String
	}
})

const ItemSchema = new Schema({
	name: {
		type: String
	},
	quantity: {
		type: Number,
		min: 1
	},
	price: {
		type: Number,
		min: 0
	},
	total: {
		type: Number,
		min: 0
	}
})

const InvoiceSchema = new Schema({
	invoiceId: {
		type: String,
		unique: true,
		required: true
	},
	senderAddress: {
		type: AddressSchema,
	},
	clientName: {
		type: String
	},
	clientEmail: {
		type: String,
		match:
			/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	},
	clientAddress: {
		type: AddressSchema
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	},
	paymentDue: {
		type: Date,
		required: true,
		default: Date.now
	},
	paymentTerms: {
		value: {
			type: String,
			required: true,
			enum: ['1', '7', '14', '30']
		},
		label: {
			type: String,
			required: true
		}
	},
	status: {
		type: String,
		required: true,
		default: 'draft'
	},
	description: {
		type: String,
		required: false
	},
	items: {
		type: [ItemSchema]
	}
})

export default models.Invoice || model('Invoice', InvoiceSchema)
