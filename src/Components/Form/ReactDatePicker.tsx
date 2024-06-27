'use client'

import { Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomDatePickerInput from './CustomDatePickerInput'
import { useFormContext } from '@/Contexts'

const ReactDatePicker = () => {
	const { control, setValue } = useFormContext()

	return (
		<fieldset className='small-fieldset-container'>
			<label className='text-textSecondary'>Invoice Date</label>
			<Controller
				name='paymentDue'
				control={control}
				render={({ field }) => (
					<DatePicker
						selected={field.value}
						onChange={(date) => {
							if (date) setValue('paymentDue', date)
						}}
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
