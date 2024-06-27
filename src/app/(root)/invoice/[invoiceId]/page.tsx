interface Props {
    params: {
        invoiceId: string
    }
}

function page({ params }: Props) {
  return (
    <div>
        <h1 className='text-textPrimary text-heading-l'>{params.invoiceId}</h1>
    </div>
  )
}

export default page