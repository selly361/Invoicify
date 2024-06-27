import { Schema, model, models } from 'mongoose'

const AddressSchema = new Schema({
	street: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	postCode: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	}
})

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		min: 1
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	total: {
		type: Number,
		required: true,
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
		required: true
	},
	clientName: {
		type: String,
		required: true
	},
	clientEmail: {
		type: String,
		required: true,
		match:
			/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	},
	clientAddress: {
		type: AddressSchema,
		required: true
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
		required: true
	},
	description: {
		type: String,
		required: true
	},
	items: {
		type: [ItemSchema]
	}
})

export default models.Invoice || model('Invoice', InvoiceSchema)
