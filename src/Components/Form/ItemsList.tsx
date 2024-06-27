'use client'

import { useFieldArray } from 'react-hook-form'
import { useFormContext } from '@/Contexts'
import { IconDelete } from '@/Icons'
import { Input, Label } from '@/Components'

function ItemsList() {
    const { control, watch, formState: { errors }, hasFieldError } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items'
    })

    const items = watch('items')

    return (
        <fieldset className='medium-fieldset-container'>
            <h3 className='text-heading-s text-lg leading-8 -tracking-[0.38px] text-[#777F98]'>
                Item List
            </h3>

            <div className='flex gap-4 mb-3 text-left'>
                <Label error={hasFieldError('name')} cn='w-44'>Item Name</Label>
                <Label error={hasFieldError('quantity')} cn='w-[60px]'>Qty.</Label>
                <Label error={hasFieldError('price')} cn='w-[92px]'>Price</Label>
                <Label error={hasFieldError('total')} cn='w-[68px]'>Total</Label>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className='flex gap-4 mb-4'>
                    <Input
                        name={`items.${index}.name`}
                        error={errors.items?.[index]?.name}
                        cn='w-44'
                    />
                    <Input
                        type='number'
                        name={`items.${index}.quantity`}
                        error={errors.items?.[index]?.quantity}
                        options={{ valueAsNumber: true }}
                        cn='w-[60px] p-3'
                    />
                    <Input
                        type='number'
                        options={{ valueAsNumber: true }}
                        name={`items.${index}.price`}
                        error={errors.items?.[index]?.price}
                        cn='w-[92px]'
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
