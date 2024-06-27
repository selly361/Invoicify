'use client'

import { useModalContext } from '@/Contexts'

function Buttons() {
	const { closeModal, activeModal } = useModalContext()


	return (
		<div className='w-full h-12'>
			<div className={`h-full flex items-center ${activeModal === 'editInvoice' ? 'justify-end' : 'justify-between'}`}>
				{activeModal === 'addInvoice' && (
					<button
						onClick={closeModal}
						type='button'
						className='button bg-[#F9FAFE] text-textTertiary'
					>
						Discard
					</button>
				)}

				<div className='flex gap-2 h-28 items-center'>
					{activeModal === 'addInvoice' && (
						<button type='button' className='button-tertiary'>
							Save as Draft
						</button>
					)}

					{activeModal === 'editInvoice' && (
						<button onClick={closeModal} className='button-secondary'>
							Cancel
						</button>
					)}

					<button
						type='submit'
						className='button-primary'
					>
						{activeModal === 'addInvoice' ? 'Save & Send' : 'Save Changes'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Buttons
