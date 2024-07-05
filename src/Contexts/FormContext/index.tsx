'use client'

import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InvoiceSchema } from '@/Lib/Schemas'
import { FormValues, Invoice } from '@/Types'
import { initialValues } from '@/Constants'
import { deleteInvoice, fetchInvoice, markInvoicePaid } from '@/Lib/Actions'
import { useParams, useRouter } from 'next/navigation'
import { useModalContext } from '@/Contexts'
import { FormContextType } from './FormContext.types'

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider')
    }
    return context
}

export const FormProvider = ({ children }: PropsWithChildren) => {
    const { invoiceId } = useParams()
    const router = useRouter()
    const [defaultValues, setDefaultValues] = useState<FormValues>(initialValues)
    const { openModal, closeModal } = useModalContext()

    const formMethods = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(InvoiceSchema),
        defaultValues
    })

    const hasFieldError = (field: 'name' | 'quantity' | 'price' | 'total') => 
        Array.isArray(formMethods.formState.errors.items) &&
        formMethods.formState.errors.items.some(item => item && item[field])

    const calculateTotals = () => {
        const items = formMethods.getValues('items')
        items.forEach((item, index) => {
            const total = item.quantity * item.price
            formMethods.setValue(`items.${index}.total`, total, { shouldValidate: true })
        })
    }

    useEffect(() => {
        calculateTotals()
    }, [JSON.stringify(formMethods.watch('items'))])

    const handleEdit = async () => {
        const invoice = await fetchInvoice(invoiceId as string)

        if(!invoice) return

        const data: Invoice = {
            ...invoice,
            _id: invoice._id,
            createdAt: new Date(invoice.createdAt),
            paymentDue: new Date(invoice.paymentDue)
        }

        formMethods.reset(data)
        setDefaultValues(data)

        openModal('editInvoice')
    }

    const handleDelete = async () => {
        const invoice = await fetchInvoice(invoiceId as string)

        if(!invoice) return

        await deleteInvoice(invoice._id as string)
        closeModal()
        router.push('/')
    }



    const handleMarkAsPaid = async () => {
        const invoice = await fetchInvoice(invoiceId as string)

        await markInvoicePaid(invoice._id as string)
    }

    

    return (
        <FormContext.Provider value={{ ...formMethods, invoiceId, handleEdit, handleMarkAsPaid, hasFieldError, calculateTotals, handleDelete }}>
            {children}
        </FormContext.Provider>
    )
}