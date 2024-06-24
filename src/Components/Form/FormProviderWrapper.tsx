'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsWithChildren } from 'react'
import { InvoiceSchema } from '@/Lib/Schemas'
import { initialValues } from '@/Constants'
import { FormValues } from '@/Types'


function FormProviderWrapper({ children }: PropsWithChildren) {
	const formMethods = useForm<FormValues>({
		mode: 'onChange',
		resolver: zodResolver(InvoiceSchema),
		defaultValues: initialValues
	})


	return <FormProvider {...formMethods}>{children}</FormProvider>
}

export default FormProviderWrapper