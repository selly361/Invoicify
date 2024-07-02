'use client'

import { Status } from '@/Components'
import { useFormContext, useModalContext } from '@/Contexts'
import { Status as TStatus } from '@/Types'

interface Props {
	status: TStatus
}

function InvoiceButtonsHeader({ status }: Props) {

    const { handleEdit, handleMarkAsPaid } = useFormContext()
    const { openModal } = useModalContext()

	return (
		<div className='w-full h-[72px] pl-8 pr-6 mb-6 flex items-center justify-between bg-bgInvoiceItem rounded-lg shadow-invoiceItem'>
			<div className='h-max flex items-center gap-5'>
				<p className='text-textSecondary text-body'>Status</p>
				<Status status={status} />
			</div>
			<fieldset className='flex items-center gap-2 h-max w-max'>
				<button onClick={handleEdit} className='button-secondary' disabled={status === 'paid'}>Edit</button>
				<button onClick={() => openModal('delete')} className='button-danger'>Delete</button>
				<button onClick={() => handleMarkAsPaid()} className='button-primary' disabled={status === 'paid' || status === 'draft'}>Mark as Paid</button>
			</fieldset>
		</div>
	)
}

export default InvoiceButtonsHeader