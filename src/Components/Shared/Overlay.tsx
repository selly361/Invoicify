'use client'

import { initialValues } from '@/Constants'
import { useFormContext, useModalContext } from '@/Contexts'
import { AnimatePresence, motion } from 'framer-motion'

function Overlay() {
	const { activeModal, closeModal } = useModalContext()
	const { reset } = useFormContext()

	const handleClick = () => {
		closeModal()
		reset(initialValues)
	}

	return (
		<AnimatePresence>
			{activeModal ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
                    onClick={handleClick}
					className={`fixed w-screen h-screen bg-black opacity-50 inset-0 ${activeModal === 'login' ? 'z-50' : 'z-20'}`}
				/>
			) : null}
		</AnimatePresence>
	)
}

export default Overlay
