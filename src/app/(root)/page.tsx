import { InvoiceHeader, Invoices, NoInvoice } from "@/Components"
import { fetchUserInvoices } from "@/Lib/Actions"

async function Home() {

  const invoicesData = await fetchUserInvoices()

  const length = invoicesData?.length ?? 0

  return (
    <main className='w-[730px] min-h-24 bg-bgMain flex flex-col gap-16 pb-'>
    <InvoiceHeader numberOfInvoices={length} />

    <div className='w-full min-h-80 flex items-center justify-center'>
      {length === 0 ? <NoInvoice /> : <Invoices invoicesData={invoicesData} />}
    </div>
  </main>
  )
}

export default Home