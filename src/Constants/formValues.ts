import { Invoice } from "@/Types";
import { addDays } from "@/Utils";

export const initialValues: Invoice = {
	invoiceId: '',
	senderAddress: {
		street: '',
		city: '',
		postCode: '',
		country: ''
	},
	clientName: '',
	clientEmail: '',
	clientAddress: {
		street: '',
		city: '',
		postCode: '',
		country: ''
	},
	status: 'pending',
	createdAt: new Date(),
	paymentDue: addDays(new Date(), 30),
	paymentTerms: {
		label: 'Next 30 Days',
		value: '30'
	},
	description: '',
	items: []
}