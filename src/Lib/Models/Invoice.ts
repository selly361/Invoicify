import { Item } from '@/Types'
import { Schema, model, models } from 'mongoose'

const AddressSchema = new Schema({
  street: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  city: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  postCode: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  country: {
    type: String,
    required: function () { return this.status !== 'draft' }
  }
})

const ItemSchema = new Schema({
  name: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  quantity: {
    type: Number,
    required: function () { return this.status !== 'draft' },
    min: 1
  },
  price: {
    type: Number,
    required: function () { return this.status !== 'draft' },
    min: 0
  },
  total: {
    type: Number,
    required: function () { return this.status !== 'draft' },
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
    required: function () { return this.status !== 'draft' }
  },
  clientName: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  clientEmail: {
    type: String,
    required: function () { return this.status !== 'draft' },
    match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  clientAddress: {
    type: AddressSchema,
    required: function () { return this.status !== 'draft' }
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  paymentDue: {
    type: Date,
    required: function () { return this.status !== 'draft' },
    default: Date.now
  },
  paymentTerms: {
    value: {
      type: String,
      required: function () { return this.status !== 'draft' },
      enum: ['1', '7', '14', '30']
    },
    label: {
      type: String,
      required: function () { return this.status !== 'draft' }
    }
  },
  status: {
    type: String,
    required: true,
    default: 'draft'
  },
  description: {
    type: String,
    required: function () { return this.status !== 'draft' }
  },
  items: {
    type: [ItemSchema],
    validate: [arrayLimit, 'At least one item is required']
  }
})

function arrayLimit(val: Item[]) {
  return this.status === 'draft' || val.length > 0;
}

export default models.Invoice || model('Invoice', InvoiceSchema)
