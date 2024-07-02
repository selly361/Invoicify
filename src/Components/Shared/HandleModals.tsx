'use client'

import { useModalContext } from '@/Contexts'
import { AnimatePresence } from 'framer-motion'
import { Form, DeleteModal, AuthModal } from '@/Components'

function HandleModals() {
	const { activeModal } = useModalContext()

	return (
		<AnimatePresence mode='wait'>
			{activeModal === 'addInvoice' || activeModal === 'editInvoice' ? ( <Form />) : null}
			{activeModal === 'delete' ? <DeleteModal /> : null}
			{activeModal === 'login' ? <AuthModal /> : null}
		</AnimatePresence>
	)
}

export default HandleModals
