import { InvoiceHeader, Invoices, NoInvoice } from '@/Components'
import { fetchUserInvoices } from '@/Lib/Actions'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	const length = (await fetchUserInvoices())?.length ?? 0
	const title =
		length === 0 ? 'No Invoices' : `${length} Invoice${length > 1 ? 's' : ''}`

	return { title }
}

async function Home() {
	const invoicesData = await fetchUserInvoices()

	const length = invoicesData?.length ?? 0

	return (
		<>
			<InvoiceHeader numberOfInvoices={length} />

			<div className='w-full min-h-80 flex items-center justify-center'>
				{length ? <Invoices invoicesData={invoicesData} /> : <NoInvoice />}
			</div>
		</>
	)
}

export default Home
