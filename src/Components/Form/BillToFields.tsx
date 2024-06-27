'use client'

import { useFormContext } from '@/Contexts'
import { Input, Label } from '@/Components'

function BillToFields() {
	const {
		formState: { errors }
	} = useFormContext()

	return (
		<fieldset className='medium-fieldset-container'>
			<fieldset className='small-fieldset-container'>
				<h3 className='text-heading-s text-purple'>Bill To</h3>
				<Label error={errors.clientName} htmlFor='clientName'>Client's Name</Label>
				<Input name='clientName' error={errors.clientName} />
			</fieldset>

			<fieldset className='small-fieldset-container'>
				<Label error={errors.clientEmail}>Client's Email</Label>
				<Input name='clientEmail' error={errors.clientEmail} />
			</fieldset>

			<fieldset className='small-fieldset-container'>
				<Label error={errors.clientAddress?.street}>Street Address</Label>
				<Input
					name='clientAddress.street'
					error={errors.clientAddress?.street}
				/>
			</fieldset>

			<div className='grid grid-cols-3 gap-6'>
				<fieldset className='small-fieldset-container'>
					<Label error={errors.clientAddress?.city}>City</Label>
					<Input
						name='clientAddress.city'
						error={errors.clientAddress?.city}
					/>
				</fieldset>

				<fieldset className='small-fieldset-container'>
					<Label error={errors.clientAddress?.postCode}>Post Code</Label>
					<Input
						name='clientAddress.postCode'
						error={errors.clientAddress?.postCode}
					/>
				</fieldset>

				<fieldset className='small-fieldset-container'>
					<Label error={errors.clientAddress?.country}>Country</Label>
					<Input
						name='clientAddress.country'
						error={errors.clientAddress?.country}
					/>
				</fieldset>
			</div>
		</fieldset>
	)
}

export default BillToFields
