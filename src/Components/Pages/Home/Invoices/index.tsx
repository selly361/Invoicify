import InvoiceItem from '../InvoiceItem'
import { Invoice } from '@/Types'

interface Props {
	invoicesData: Invoice[] | undefined
}

function Invoices({ invoicesData }: Props) {
	return (
		<div className='w-full h-full flex flex-col gap-4 pb-20'>
			{invoicesData?.map((invoiceData, index) => (
				<InvoiceItem
					invoiceData={invoiceData}
					index={index}
					key={invoiceData._id}
				/>
			))}
		</div>
	)
}

export default Invoices
