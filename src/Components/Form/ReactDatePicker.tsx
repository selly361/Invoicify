'use client'

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomDatePickerInput from './CustomDatePickerInput'
import { addDays } from '@/Utils'
import { FormValues } from '@/Types'

const ReactDatePicker = () => {
	const {
		control,
		setValue,
		watch,
	} = useFormContext<FormValues>()

	const days = Number(watch('paymentTerms.value'))

	return (
		<fieldset className='small-fieldset-container'>
			<label className='text-textSecondary'>Invoice Date</label>
			<Controller
				name='paymentDue'
				control={control}
				render={({ field }) => (
					<DatePicker
						selected={field.value}
						onChange={(date) =>
							setValue('paymentDue', addDays(date as Date, days))
						}
						minDate={new Date()}
						customInput={<CustomDatePickerInput />}
						dateFormat='dd MMM yyyy'
					/>
				)}
				rules={{
					required: {
						value: true,
						message: "can't be empty"
					}
				}}
			/>
		</fieldset>
	)
}

export default ReactDatePicker
