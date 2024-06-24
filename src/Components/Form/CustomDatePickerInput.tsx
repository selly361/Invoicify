import React, { forwardRef } from 'react'
import { IconCalender } from '@/Icons'

interface CustomDatePickerInputProps {
	value?: string
	onClick?: () => void
}



const CustomDatePickerInput = forwardRef<
	HTMLButtonElement,
	CustomDatePickerInputProps
>(({ value, onClick }, ref) => (
	<button
		type='button'
		onClick={onClick}
		ref={ref}
		className='invoice-input flex items-center justify-between'
	>
		<span>{value ? value : 'Select Date'}</span>
		<IconCalender />
	</button>
))


export default CustomDatePickerInput