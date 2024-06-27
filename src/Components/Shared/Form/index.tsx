'use client'

import { formAnimation } from '@/Constants'
import { motion } from 'framer-motion'
import { Fields, Buttons } from '@/Components'
import { useFormContext, useModalContext } from '@/Contexts'
import { useParams } from 'next/navigation'
import { updateInvoice, createInvoice } from '@/Lib/Actions'
import { FormValues, Invoice } from '@/Types'
import { SubmitHandler } from 'react-hook-form'

const Form = () => {
	const { handleSubmit, formState, reset } = useFormContext()
	const { closeModal, activeModal } = useModalContext()
	const { invoiceId } = useParams()

	const handleSaveAndSend: SubmitHandler<FormValues> = async (data) => {
		const action =
			activeModal === 'editInvoice' && invoiceId ? updateInvoice : createInvoice
		await action(data as Invoice)
		closeModal()
		reset()
	}

	return (
		<motion.form
			variants={formAnimation}
			onSubmit={handleSubmit(handleSaveAndSend)}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='fixed h-screen top-0 bottom-0 left-0 w-[700px] bg-bgForm rounded-r-3xl z-40 pt-14 pr-8 pl-36'
		>
			<h2 className='text-heading-m leading-8 text-textPrimary mb-12'>
				{activeModal === 'editInvoice' ? 'Edit Invoice' : 'New Invoice'}
			</h2>
			<Fields />
			<div className='w-full h-max pl-2 pr-4 pt-4 pb-8 bg-bgForm mx-auto flex flex-col gap-8'>
				<div className='h-8 flex flex-col gap-1'>
					{(!formState.isValid && (formState.isSubmitted || formState.isDirty)) && (
						<p className='text-red text-body-variant'>
							- All fields must be added
						</p>
					)}
					{formState.errors.items && (
						<p className='text-red text-body-variant'>
							- An Item must be added
						</p>
					)}
				</div>
				<Buttons />
			</div>
		</motion.form>
	)
}

export default Form
