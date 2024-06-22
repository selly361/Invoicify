'use client'

import { useModalContext } from '@/Contexts'
import { AnimatePresence, motion } from 'framer-motion'

function Overlay() {
	const { activeModal, closeModal } = useModalContext()

	return (
		<AnimatePresence>
			{activeModal ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
                    onClick={closeModal}
					className='fixed w-screen h-screen bg-black opacity-50 inset-0 z-20'
				/>
			) : null}
		</AnimatePresence>
	)
}

export default Overlay
