'use client'

import { Input, Label, PaymentTerms, ReactDatePicker } from '@/Components'
import { useFormContext } from '@/Contexts'

function InvoiceDetailsFields() {

	const { formState: { errors } } = useFormContext()

	return (
		<fieldset className='medium-fieldset-container'>
			<div className='grid grid-cols-2 gap-6'>
				<ReactDatePicker />

				<fieldset className='small-fieldset-container'>
					<Label>Payment Terms</Label>
					<PaymentTerms />
				</fieldset>
			</div>

			<fieldset className='small-fieldset-container'>
				<Label error={errors.description} htmlFor='description'>Project Description</Label>
				<Input error={errors.description} name='description' />
			</fieldset>
		</fieldset>
	)
}

export default InvoiceDetailsFields


