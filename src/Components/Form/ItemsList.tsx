'use client'

import { useFormContext, useFieldArray } from 'react-hook-form'
import { useEffect } from 'react'
import { IconDelete } from '@/Icons'
import { FormValues } from '@/Types'


function ItemsList() {
	const { register, control, watch, setValue } = useFormContext<FormValues>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'items'
	})

	const items = watch('items')

	useEffect(() => {
		items.forEach((item, index) => {
			const total = item.quantity * item.price
			setValue(`items.${index}.total`, total)
		})
	}, [JSON.stringify(items)])

	return (
		<fieldset className='medium-fieldset-container'>
			<h3 className='text-heading-s text-lg leading-8 -tracking-[0.38px] text-[#777F98]'>
				Item List
			</h3>

			<div className='flex gap-4 mb-3 text-left'>
				<label className='text-textSecondary w-44'>Item Name</label>
				<label className='text-textSecondary w-[60px]'>Qty.</label>
				<label className='text-textSecondary w-[92px]'>Price</label>
				<label className='text-textSecondary w-[68px]'>Total</label>
			</div>
			{fields.map((field, index) => (
				<div key={field.id} className='flex gap-4 mb-4'>
					<input
						{...register(`items.${index}.name`)}
						className='invoice-input w-44'
					/>
					<input
						type='number'
						{...register(`items.${index}.quantity`, { valueAsNumber: true })}
						className='invoice-input w-[60px] p-3'
					/>
					<input
						type='number'
						{...register(`items.${index}.price`, { valueAsNumber: true })}
						className='invoice-input w-[92px]'
					/>
					<h4 className='text-heading-s-variant h-12 text-textPrimary flex items-center w-[68px]'>
						{items[index].total}
					</h4>
					<button
						type='button'
						onClick={() => remove(index)}
						className='h-12 w-max flex items-center'
					>
						<IconDelete />
					</button>
				</div>
			))}
			<button
				type='button'
				onClick={() => append({ name: '', quantity: 1, price: 0, total: 0 })}
				className='button-secondary w-full'
			>
				+ Add New Item
			</button>
		</fieldset>
	)
}

export default ItemsList