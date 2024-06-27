'use client'

import { IconPlus } from '@/Icons'
import { useModalContext } from '@/Contexts'

interface Props {
	numberOfInvoices: number
}

function InvoiceHeader({ numberOfInvoices }: Props) {
	const { openModal } = useModalContext()

	const length = !numberOfInvoices ? 'No Invoice' : numberOfInvoices === 1 ? '1 Invoice' : `${numberOfInvoices} Invoices`

	return (
		<>
			<div className='flex items-center  justify-between'>
				<div>
					<h1 className='text-textPrimary text-heading-l mb-2'>Invoices</h1>
					<p className='text-textSecondary text-body'>{length}</p>
				</div>

				<button onClick={() => openModal('addInvoice')} className='w-[150px] h-12 flex items-center justify-center rounded-3xl bg-btnPrimary hover:bg-btnPrimaryHover transition-colors ease-in-out duration-300'>
					<IconPlus className='mr-4' />

					<h5 className='text-heading-s-variant text-white'>
						New <span>Invoice</span>
					</h5>
				</button>
			</div>
		</>
	)
}

export default InvoiceHeader
