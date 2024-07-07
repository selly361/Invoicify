import { InvoiceButtonsHeader, InvoiceInfo } from '@/Components'
import { IconArrowLeft } from '@/Icons'
import { fetchInvoice } from '@/Lib/Actions'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface Props {
	params: {
		invoiceId: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `Invoice #${params.invoiceId}`
	}
}

async function page({ params }: Props) {
	const invoice = await fetchInvoice(params.invoiceId)

	if (!invoice) redirect('/')

	return (
		<div className='w-full h-max flex flex-col mb-12'>
			<Link
				href='/'
				className='hover:text-grayMedium text-textPrimary mb-8 flex items-center gap-6 w-max'
			>
				<IconArrowLeft />
				<p className='text-heading-s transition-color duration-300'>Go back</p>
			</Link>

			<InvoiceButtonsHeader status={invoice.status} />
			<InvoiceInfo invoice={invoice} />
		</div>
	)
}

export default page
