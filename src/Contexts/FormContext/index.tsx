'use client'

import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InvoiceSchema } from '@/Lib/Schemas'
import { FormValues, Invoice } from '@/Types'
import { initialValues } from '@/Constants'
import { fetchInvoice } from '@/Lib/Actions'
import { useParams } from 'next/navigation'
import { useModalContext } from '@/Contexts'

interface FormContextType extends UseFormReturn<FormValues> {
    handleEdit: () => Promise<void>
    hasFieldError: (field: 'name' | 'quantity' | 'price' | 'total') => boolean
    calculateTotals: () => void
}

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
    const [defaultValues, setDefaultValues] = useState<FormValues>(initialValues)
    const { openModal } = useModalContext()

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

    return (
        <FormContext.Provider value={{ ...formMethods, handleEdit, hasFieldError, calculateTotals }}>
            {children}
        </FormContext.Provider>
    )
}
