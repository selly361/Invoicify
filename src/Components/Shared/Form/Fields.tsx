'use client'

import { ItemsList, BillToFields, BillFromFields, InvoiceDetails } from '@/Components'

function Fields() {
	return (
		<fieldset className='large-fieldset-container overflow-y-scroll h-[62%] pr-6 pl-2 pb-4'>
			<BillFromFields />
			<BillToFields />
			<InvoiceDetails />
			<ItemsList />
		</fieldset>
	)
}

export default Fields
