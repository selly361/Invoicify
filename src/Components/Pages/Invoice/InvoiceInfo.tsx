import React from 'react'
import { Invoice } from '@/Types'
import { formatDate, totalPriceOfItems } from '@/Utils'

interface Props {
	invoice: Invoice
}

const InvoiceInfo = ({ invoice }: Props) => {
	const {
		invoiceId,
		senderAddress,
		clientName,
		clientEmail,
		clientAddress,
		createdAt,
		paymentDue,
		description,
		items
	} = invoice

	if (!invoice._id) return null

	return (
		<div className='bg-bgInvoiceItem p-8 rounded-lg shadow-invoiceItem mt-6'>
			<div className='flex justify-between mb-8'>
				<div>
					<h4 className='text-textPrimary text-heading-s-variant mb-2'>
						<span className='text-blueGrayish'>#</span>
						{invoiceId}
					</h4>{' '}
					<p className='text-body text-textSecondary'>{description}</p>
				</div>
				<div className='text-right'>
					<p className='text-body text-textSecondary'>{senderAddress.street}</p>
					<p className='text-body text-textSecondary'>{senderAddress.city}</p>
					<p className='text-body text-textSecondary'>
						{senderAddress.postCode}
					</p>
					<p className='text-body text-textSecondary'>
						{senderAddress.country}
					</p>
				</div>
			</div>

			<div className='flex justify-between mb-8'>
				<div className='flex flex-col gap-8'>
					<div>
						<p className='text-body text-textSecondary'>Invoice Date</p>
						<h4 className='text-heading-s text-textPrimary'>
							{formatDate(createdAt)}
						</h4>
					</div>
					<div>
						<p className='text-body text-textSecondary'>Payment Due</p>
						<h4 className='text-heading-s text-textPrimary'>
							{formatDate(paymentDue)}
						</h4>
					</div>
				</div>
				<div>
					<p className='text-body text-textSecondary'>Bill To</p>
					<h4 className='text-heading-s text-textPrimary'>{clientName}</h4>
					<p className='text-body text-textSecondary'>{clientAddress.street}</p>
					<p className='text-body text-textSecondary'>{clientAddress.city}</p>
					<p className='text-body text-textSecondary'>
						{clientAddress.postCode}
					</p>
					<p className='text-body text-textSecondary'>
						{clientAddress.country}
					</p>
				</div>
				<div>
					<p className='text-body text-textSecondary'>Sent to</p>
					<h4 className='text-heading-s text-textPrimary'>{clientEmail}</h4>
				</div>
			</div>

			<div className='bg-bgViewSummary rounded-lg'>
				<div className='p-6 rounded-lg'>
					<table className='w-full'>
						<thead>
							<tr className='text-textSecondary text-body text-right'>
								<th className='text-left'>Item Name</th>
								<th className='text-center'>QTY.</th>
								<th>Price</th>
								<th>Total</th>
							</tr>
							<tr>
								<td colSpan={4} className='h-8'></td>
							</tr>
						</thead>
						<tbody className='mt-8'>
							{items.map((item, index) => (
								<tr
									className='text-heading-s text-textPrimary text-right'
									key={index}
								>
									<td className='text-left'>{item.name}</td>
									<td className='text-center'>{item.quantity}</td>
									<td>£{item.price.toFixed(2)}</td>
									<td>£{(item.quantity * item.price).toFixed(2)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='flex justify-between items-center bg-bgViewSummaryFooter p-6 mt-6 rounded-b-lg'>
					<p className='text-body text-textSecondary'>Amount Due</p>
					<h4 className='text-heading-m text-textPrimary'>
						£{totalPriceOfItems(items).toFixed(2)}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default InvoiceInfo
