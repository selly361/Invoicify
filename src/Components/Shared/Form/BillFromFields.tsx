'use client'

import { useFormContext } from '@/Contexts'
import { Input, Label } from '@/Components'

function BillFromFields() {
    const {
        formState: { errors }
    } = useFormContext()

    return (
        <fieldset className='medium-fieldset-container'>
            <h3 className='text-heading-s text-purple'>Bill From</h3>

            <fieldset className='small-fieldset-container'>
                <Label htmlFor='senderAddress.street' error={errors.senderAddress?.street}>
                    Street Address
                </Label>
                <Input error={errors.senderAddress?.street} name='senderAddress.street' />
            </fieldset>

            <div className='grid grid-cols-3 gap-6'>
                <fieldset className='small-fieldset-container'>
                    <Label htmlFor='senderAddress.city' error={errors.senderAddress?.city}>
                        City
                    </Label>
                    <Input error={errors.senderAddress?.city}  name='senderAddress.city' />
                </fieldset>

                <fieldset className='small-fieldset-container'>
                    <Label htmlFor='senderAddress.postCode' error={errors.senderAddress?.postCode}>
                        Post Code
                    </Label>
                    <Input error={errors.senderAddress?.postCode} name='senderAddress.postCode' />
                </fieldset>

                <fieldset className='small-fieldset-container'>
                    <Label htmlFor='senderAddress.country' error={errors.senderAddress?.country}>
                        Country
                    </Label>
                    <Input error={errors.senderAddress?.country} name='senderAddress.country' />
                </fieldset>
            </div>
        </fieldset>
    )
}

export default BillFromFields
