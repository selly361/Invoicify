'use client'

import { dropdownAnimation, dropdownOptionAnimation, paymentTermsOptions } from '@/Constants'
import { IconArrowDown } from '@/Icons'
import { Invoice } from '@/Types'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useFormContext } from '@/Contexts'

const PaymentTerms = () => {
	const { setValue, getValues } = useFormContext()
	const fieldValue = getValues('paymentTerms')
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const handleToggleDropdown = () => setIsOpen(!isOpen)
	
	const handleOptionSelect = (option: Invoice['paymentTerms']) => {
		setValue('paymentTerms', option)
		setIsOpen(false)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				type='button'
				className='dropdown-button'
				onClick={handleToggleDropdown}
				aria-haspopup='listbox'
				aria-expanded={isOpen}
			>
				{fieldValue.label}
				<IconArrowDown className={`transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`} />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						variants={dropdownAnimation}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='dropdown-menu'
						role='listbox'
					>
						{paymentTermsOptions.map((option) => (
							<motion.li
								key={option.label}
								className={`dropdown-option ${fieldValue.value === option.value ? 'text-purpleLight' : ''}`}
								role='option'
								aria-selected={fieldValue.value === option.value}
								onClick={() => handleOptionSelect(option)}
								{...dropdownOptionAnimation}
							>
								{option.label}
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}

export default PaymentTerms
