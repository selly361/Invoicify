'use client'

import { useModalContext } from '@/Contexts'
import { AnimatePresence } from 'framer-motion'
import { Form } from '@/Components'

function HandleModals() {
	const { activeModal } = useModalContext()

	return (
		<AnimatePresence mode='wait'>
			{activeModal === 'addInvoice' || activeModal === 'editInvoice' ? (
				<Form />
			) : null}
		</AnimatePresence>
	)
}

export default HandleModals
