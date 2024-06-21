import { Invoice } from "@/Types";

export const initialValues: Invoice = {
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
	createdAt: new Date(),
	paymentTerms: '30',
	description: '',
	items: []
}