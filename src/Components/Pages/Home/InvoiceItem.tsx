import { IconArrowRight } from '@/Icons'
import { Invoice } from '@/Types'
import { formatDate, totalPriceOfItems } from '@/Utils'
import Link from 'next/link'
import { Status } from '../..'

interface Props {
	invoiceData: Invoice
	index: number
}

const InvoiceItem = ({ invoiceData }: Props) => {
	const { invoiceId, status } = invoiceData
	
	return (
		<Link href={`/invoice/${invoiceId}`}>
			<div className='w-full h-[72px] pl-8 pr-6 border border-transparent hover:border-purple transition-colors duration-300 ease-in-out  grid grid-cols-invoice-layout grid-rows-1 items-center justify-between bg-bgInvoiceItem rounded-lg shadow-invoiceItem'>
				<h4 className='text-textPrimary text-heading-s-variant'>
					<span className='text-blueGrayish'>#</span>
					{invoiceId}
				</h4>
				<p className='text-textTertiary text-body'>
					Due {formatDate(invoiceData.paymentDue)}
				</p>
				<p className='text-textPrimary text-body'>{invoiceData.clientName}</p>
				<p className='text-heading-s text-textPrimary'>
					£ {totalPriceOfItems(invoiceData.items).toFixed(2)}
				</p>
				<Status status={status} />
				<IconArrowRight />
			</div>
		</Link>
	)
}

export default InvoiceItem
