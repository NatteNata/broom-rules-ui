import { ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'

import Eye from '../../assets/icons/components/Eye'
import EyeOffOutline from '../../assets/icons/components/EyeOffOutline'
import Search from '../../assets/icons/components/Search'
import { cn, useGenerateId } from '../../utils/'

type CommonProps = {
  helperMessage?: string
  label?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, CommonProps>((props, ref) => {
  const {
    autoComplete,
    className,
    helperMessage,
    id,
    inputMode,
    label,
    name,
    placeholder,
    required,
    type = 'text',
    ...restProps
  } = props
  const ID = useGenerateId(id)

  const [inputType, setInputType] = useState(type)

  const toggleMode = () => {
    if (inputType === 'text') {
      setInputType('password')
    }
    if (inputType === 'password') {
      setInputType('text')
    }
  }

  return (
    <div className={'my-6'}>
      <label className={'block'} htmlFor={'ID'}>
        {label && <Label forId={ID} label={label} required={required} />}
        <div className={cn('relative block group')}>
          <input
            autoComplete={name}
            className={cn(
              'bg-dark-500 placeholder-light-900 border border-dark-100 shadow-sm shadow-light-900 rounded-sm block',
              'peer text-base/6 py-1.5 px-3 w-full truncate',
              'hover:bg-inherit group-hover:text-light-100 hover:border hover:border-light-900' +
                ' group-hover:placeholder-light-100',
              'focus-visible:border-none focus-visible:outline-none focus-visible:ring focus-visible:ring-accent-500',
              'active:bg-inherit active:placeholder-light-100 active:text-light-100 active:border' +
                ' active:border-light-100 active:stroke-light-100',
              'invalid:ring-2 invalid:ring-red-500 invalid:border-none',
              'autofill:shadow-[inset_0_0_0_1000px_#171717]',
              type === 'search' && 'pl-10',
              type === 'password' && 'pr-10',
              className
            )}
            id={ID}
            inputMode={inputMode}
            name={name}
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            {...restProps}
          />
          {type === 'search' && (
            <span
              className={cn(
                'absolute inset-y-0 left-0 flex items-center pl-2',
                'stroke-light-700 group-hover:stroke-light-100 group-active:stroke-light-100'
              )}
            >
              <Search />
            </span>
          )}
          {type === 'password' && (
            <span
              className={cn(
                'absolute inset-y-1 -right-2 items-center pr-4',
                'stroke-light-700 group-hover:stroke-light-100 group-active:stroke-light-100'
              )}
              onClick={toggleMode}
            >
              {inputType === 'password' && <Eye height={28} width={28} />}
              {inputType === 'text' && <EyeOffOutline height={28} width={28} />}
            </span>
          )}
          <HelperMessage
            className={cn('invisible peer-invalid:visible text-danger-500')}
            message={helperMessage}
          />
        </div>
      </label>
    </div>
  )
})

type LabelProps = {
  disabled?: boolean
  forId: string
  label: ReactNode
  required?: boolean
} & ComponentPropsWithoutRef<'span'>

export const Label = ({ className, forId, label, required, ...restProps }: LabelProps) => {
  return (
    <span
      className={cn(
        'block text-light-900 text-sm/6',
        required && "after:content-['*'] after:ml-0.5 after:text-red-500",
        className
      )}
      {...restProps}
    >
      {label}
    </span>
  )
}

type HelperMessageProps = {
  message?: string
} & ComponentPropsWithoutRef<'span'>

export const HelperMessage = ({ className, message, ...restProps }: HelperMessageProps) => {
  return (
    <span className={cn('mt-4 text-sm', className)} {...restProps}>
      {message}
    </span>
  )
}
