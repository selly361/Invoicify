import { IconArrowRight } from '@/Icons'
import { Invoice } from '@/Types'
import { formatDate, totalPriceOfItems } from '@/Utils'
import { statusClasses } from '@/Constants'
import Link from 'next/link'

interface Props {
	invoiceData: Invoice
	index: number
}

const InvoiceItem = ({ invoiceData }: Props) => {
	const { invoiceId, status } = invoiceData
	
	const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1)

	const classes = statusClasses[capitalizedStatus]

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
					£ {totalPriceOfItems(invoiceData.items)}
				</p>
				<div
					className={`w-[104px] h-[40px] rounded-md ${classes.bg} flex items-center justify-center gap-2`}
				>
					<span className={`w-2 h-2 rounded-full ${classes.dot}`} />
					<h3 className={`text-heading-s-variant ${classes.text}`}>
						{capitalizedStatus}
					</h3>
				</div>
				<IconArrowRight />
			</div>
		</Link>
	)
}

export default InvoiceItem
