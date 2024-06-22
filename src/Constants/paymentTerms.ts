import { PaymentTerms } from "@/Types";

export const paymentTermsOptions: PaymentTerms[] = [
	{
        label: 'Next Day',
        value: '1'
    },
	{
        label: 'Next 7 Days',
        value: '7'
    },
	{
        label: 'Next 14 Days',
        value: '14'
    },
	{
        label: 'Next 30 Days',
        value: '30'
    }
]