import { useFormContext } from '@/Contexts'
import { FormValues } from '@/Types'
import { InputHTMLAttributes } from 'react'
import { FieldError, Path, RegisterOptions } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormValues>
  cn?: string
  error?: FieldError | undefined
  options?: RegisterOptions<FormValues>
}

const Input = ({ options, name, cn = '', error, ...rest }: InputProps) => {

    const { register } = useFormContext()

  return (
    <input
      {...register(name, options)}
      className={`invoice-input ${error ? 'border-red' : ''} ${cn}`}
      {...rest}
    />
  )
}

export default Input
