'use client'

import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react'

interface ModalState {
	isOpen: boolean
	activeModal: 'delete' | 'addInvoice' | 'editInvoice' | 'login' | null
}

interface ModalContextType {
	modalState: ModalState
	openModal: (modal: ModalState['activeModal']) => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

function useModalContext() {
	const context = useContext(ModalContext)
	if (context === undefined) {
		throw new Error(
			'useModalContext must be used within a ModalContextProvider'
		)
	}
	return {
		...context,
		activeModal: context.modalState.activeModal,
		isOpen: context.modalState.isOpen
	}
}

function ModalContextProvider({ children }: PropsWithChildren) {
	const [modalState, setModalState] = useState<ModalState>({
		isOpen: false,
		activeModal: null
	})

	const openModal = (modal: ModalState['activeModal']) => {
		setModalState({ isOpen: true, activeModal: modal })
	}

	const closeModal = () => {
		setModalState({ isOpen: false, activeModal: null })
	}

	useEffect(() => {
		if (modalState.isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [modalState.isOpen])

	return (
		<ModalContext.Provider value={{ modalState, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export { ModalContextProvider, useModalContext }
