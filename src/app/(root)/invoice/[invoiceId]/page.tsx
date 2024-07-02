import { InvoiceButtonsHeader, InvoiceInfo } from "@/Components"
import { IconArrowLeft } from "@/Icons"
import { fetchInvoice } from "@/Lib/Actions"
import Link from "next/link"

interface Props {
    params: {
        invoiceId: string
    }
}

async function page({ params }: Props) {

  const invoice = await fetchInvoice(params.invoiceId)

  if(!invoice) return

  return (
    <div className='w-full h-max flex flex-col mb-12'>
        <Link href='/' className='hover:text-grayMedium text-textPrimary mb-8 flex items-center gap-6 w-max'>
          <IconArrowLeft />
          <p className="text-heading-s transition-color duration-300">Go back</p>
        </Link>

      <InvoiceButtonsHeader status={invoice.status} />
      <InvoiceInfo invoice={invoice} />
    </div>
  )
}

export default page