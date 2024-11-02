import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { cn, useGenerateId } from '@/utils'
import { SearchIcon } from 'lucide-react'

type CommonProps = {
  error?: ReactNode
  label?: ReactNode
} & ComponentPropsWithoutRef<'input'>

const SimpleInput = forwardRef<HTMLInputElement, CommonProps>((props, ref) => {
  const { className, error, id, label, name, placeholder, required, type = 'text' } = props
  const ID = useGenerateId(id)

  return (
    <div>
      <label className={'block'} htmlFor={'ID'}>
        <span
          className={cn(
            'text-light-900 text-sm/6 mb-1.5',
            required && "after:content-['*'] after:ml-0.5 after:text-red-500"
          )}
        >
          {label}
        </span>
        <input
          className={cn(
            'bg-inherit border border-dark-100 shadow-sm shadow-light-900 rounded-sm block',
            'text-base/6 py-1.5 px-3',
            'hover: text-light-900 border border-light-900 placeholder-light-900',
            'focus-visible:border-none focus-visible:outline-none focus-visible:ring focus-visible:ring-accent-500',
            'active: text-light-100 border border-light-100',
            'invalid:border-red-500',
            className
          )}
          id={ID}
          name={name}
          placeholder={placeholder}
          ref={ref}
          type={type}
          {...props}
        ></input>
        {error ?? <span className={'text-red-500'}>{error}</span>}
      </label>
    </div>
  )
})

export default SimpleInput

const SearchInput = () => {
  return (
    <div>
      <span className={'sr-only'}>Search</span>
      <SearchIcon className={'absolute inset-y-12 left-4 flex items-center pl-3'} />
      <SimpleInput name={''} />
    </div>
  )
}
