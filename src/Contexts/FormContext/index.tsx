'use client'

import {
	createContext,
	useContext,
	useState,
	ReactNode
} from 'react'

import { useForm, FormProvider as RHFFormProvider, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InvoiceSchema } from '@/Lib/Schemas'
import { FormValues } from '@/Types'
import { initialValues } from '@/Constants'
import { fetchInvoice } from '@/Lib/Actions'
import { useParams } from 'next/navigation'
import { useModalContext } from '../ModalContext'

interface FormContextType {
	formMethods: UseFormReturn<FormValues>
	handleEdit: () => Promise<void>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = () => {
	const context = useContext(FormContext)
	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider')
	}
	return context
}

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const { invoiceId } = useParams()
	const [defaultValues, setDefaultValues] = useState<FormValues>(initialValues)
    const { openModal } = useModalContext()

	const formMethods = useForm<FormValues>({
		mode: 'onChange',
		resolver: zodResolver(InvoiceSchema),
		defaultValues
	})



	const handleEdit = async () => {
		const invoice = await fetchInvoice(invoiceId as string)

        setDefaultValues(invoice)
        formMethods.reset(invoice)
        openModal('editInvoice')
	}

	return (
		<FormContext.Provider value={{ formMethods, handleEdit }}>
			<RHFFormProvider {...formMethods}>{children}</RHFFormProvider>
		</FormContext.Provider>
	)
}
