import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import Eye from '@/assets/icons/components/Eye'
import Search from '@/assets/icons/components/Search'
import { cn, useGenerateId } from '@/utils'

type CommonProps = {
  error?: ReactNode
  label?: ReactNode
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, CommonProps>((props, ref) => {
  const {
    autoComplete = 'current-password',
    className,
    error,
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

  return (
    <div>
      <label className={'block'} htmlFor={'ID'}>
        {label && (
          <span
            className={cn(
              'text-light-900 text-sm/6 mb-1.5',
              required && "after:content-['*'] after:ml-0.5 after:text-red-500"
            )}
          >
            {label}
          </span>
        )}
        <div className={cn('relative block')}>
          <span>
            <input
              autoComplete={autoComplete}
              className={cn(
                'bg-inherit border border-dark-100 shadow-sm shadow-light-900 rounded-sm block',
                'text-base/6 py-1.5 px-3 w-full',
                'hover:bg-inherit hover:text-light-900 hover:border hover:border-light-900 hover:placeholder-light-900',
                'focus-visible:border-none focus-visible:outline-none focus-visible:ring focus-visible:ring-accent-500',
                'active:bg-inherit active:text-light-100 active:border active:border-light-100',
                'invalid:border-red-500',
                type === 'search' && 'pl-10',
                className
              )}
              id={ID}
              inputMode={inputMode}
              name={name}
              placeholder={placeholder}
              ref={ref}
              type={type}
              {...restProps}
            ></input>
            {type === 'search' && (
              <Search
                className={'absolute inset-y-0 left-0 flex items-center pl-2'}
                height={36}
                width={36}
              />
            )}
            {type === 'password' && (
              <Eye
                className={cn('absolute inset-y-0 right-0 items-center pr-4')}
                height={40}
                width={40}
              />
            )}
          </span>
          {error && <span className={'text-red-500'}>{error}</span>}
        </div>
      </label>
    </div>
  )
})

export default Input

/*
type SearchProps = ComponentPropsWithoutRef<'input'>

export const SearchInput = ({ className, ...restProps }: SearchProps) => {
  return (
    <div className={cn('relative block')}>
      <span>
        <SimpleInput
          {...restProps}
          className={cn('pl-10', className)}
          label={'search'}
          name={'search'}
          placeholder={'Input search...'}
          results={2}
          type={'search'}
        />
        <Search
          className={'absolute inset-y-6 left-0 flex items-center pl-2'}
          height={36}
          width={36}
        />
      </span>
    </div>
  )
}

type PasswordProps = ComponentPropsWithoutRef<'input'>

export const PasswordInput = ({ className, ...restProps }: SearchProps) => {
  return (
    <div className={cn('relative block')}>
      <span>
        <SimpleInput
          {...restProps}
          className={cn('pr-10 relative', className)}
          label={'password'}
          name={'password'}
          placeholder={'Password...'}
          results={2}
          type={'password'}
        />
        <Eye
          className={cn('absolute inset-y-6 right-0 items-center pr-4')}
          height={40}
          width={40}
        />
      </span>
    </div>
  )
}
*/
