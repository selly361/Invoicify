import { IconArrowRight } from '@/Icons'
import { Invoice } from '@/Types'
import { formatDate, totalPriceOfItems } from '@/Utils'
import Link from 'next/link'
import { Status } from '@/Components'

interface Props {
	invoiceData: Invoice
	index: number
}

const InvoiceItem = ({ invoiceData }: Props) => {
	const { invoiceId, status } = invoiceData

	return (
		<Link href={`/invoice/${invoiceId}`}>
			<div className='w-full h-[72px] pl-8 pr-6 border border-transparent hover:border-purple transition-colors duration-300 ease-in-out  grid grid-cols-invoice-layout grid-rows-1 items-center justify-between bg-bgInvoiceItem rounded-lg shadow-invoiceItem max-md:h-[134px] max-md:flex max-md:flex-col max-md:p-6 '>
				
				<h4 className='invoice-item-id max-md:hidden'>
					<span>#</span>
					{invoiceId}
				</h4>
				<p className='text-textTertiary text-body max-md:hidden'>
					Due {formatDate(invoiceData.paymentDue)}
				</p>
				<p className='text-textPrimary text-body max-md:hidden'>
					{invoiceData.clientName}
				</p>
				<p className='text-heading-s text-textPrimary max-md:hidden'>
					£ {totalPriceOfItems(invoiceData.items).toFixed(2)}
				</p>
				<div className='max-md:hidden'>
					<Status status={status} />
				</div>
				<IconArrowRight className='max-md:hidden' />

				<div className='hidden max-md:flex w-full justify-between'>
					<h4 className='invoice-item-id'>
						<span>#</span>
						{invoiceId}
					</h4>
					<p className='text-textPrimary text-body'>{invoiceData.clientName}</p>
				</div>


				<div className='w-full max-md:flex justify-between hidden'>
					<div className='flex flex-col'>
						<p className='text-textTertiary text-body'>
							Due {formatDate(invoiceData.paymentDue)}
						</p>
						<p className='text-heading-s text-textPrimary'>
							£ {totalPriceOfItems(invoiceData.items).toFixed(2)}
						</p>
					</div>

					<Status status={status} />
				</div>

			</div>
		</Link>
	)
}

export default InvoiceItem
