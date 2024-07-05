export interface ModalState {
	isOpen: boolean
	activeModal: 'delete' | 'addInvoice' | 'editInvoice' | 'login' | null
}

export interface ModalContextType {
	modalState: ModalState
	openModal: (modal: ModalState['activeModal']) => void
	closeModal: () => void
}