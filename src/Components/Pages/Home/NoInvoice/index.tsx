import { IconIllustration } from '@/Icons'
import React from 'react'

function NoInvoice() {
	return (
		<div className='flex flex-col items-center'>
			<IconIllustration className='mb-16' />
			<h2 className='text-heading-m text-textPrimary mb-6'>There is nothing here</h2>
			<p className='text-body text-textSecondary w-[193px] text-center'>
				Create an invoice by clicking the <span className=' font-bold'>New Invoice</span> button and get started
			</p>
		</div>
	)
}

export default NoInvoice
