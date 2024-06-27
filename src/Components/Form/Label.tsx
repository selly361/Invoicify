import React, { LabelHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
    cn?: string
	error?: FieldError | boolean  | undefined
}

const Label = ({ children, error, cn, ...rest }: LabelProps) => {
	return (
		<label
			{...rest}
			className={`${error ? 'text-red' : 'text-textSecondary'} ${cn}`}
		>
			{children}
		</label>
	)
}

export default Label
