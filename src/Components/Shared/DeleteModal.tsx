'use client'

import { useFormContext, useModalContext } from '@/Contexts'
import { motion } from 'framer-motion'
import { deleteModalAnimation } from '@/Constants'

function DeleteModal() {
	const { handleDelete, invoiceId } = useFormContext()

	const { closeModal } = useModalContext()


	return (
		<motion.div
			variants={deleteModalAnimation}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='bg-bgModal w-[480px] h-64 p-12 flex flex-col gap-4 rounded-lg fixed inset-0 m-auto z-50'
		>
			<h3 className='text-heading-m text-textPrimary'>Confirm Deletion</h3>
			<p className='text-body text-textSecondary'>
				Are you sure you want to delete invoice #<span>{invoiceId}</span>? This
				action cannot be undone.
			</p>
			<fieldset className='w-full flex gap-2 items-center justify-end'>
				<button onClick={closeModal} className='button-secondary'>
					Cancel
				</button>
				<button onClick={handleDelete} className='button-danger'>
					Delete
				</button>
			</fieldset>
		</motion.div>
	)
}

export default DeleteModal
