import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../utils/merge-class-names'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...restProps }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(
          'flex items-center cursor-pointer disabled:cursor-default box-border font-inter gap-2 p-1.5 px-6 rounded transition-colors ease-in-out text-white',
          variant === 'primary' &&
            'bg-primary-500 text-light-100 hover:bg-primary-100 active:bg-primary-700 active:text-light-500' +
              ' focus:bg-primary-500 focus:border-primary-700 focus:border-2 disabled:bg-primary-900 disabled:text-light-900',
          variant === 'secondary' &&
            'bg-dark-300 text-light-100 hover:bg-dark-100 active:bg-dark-400 focus:border focus:border-primary-300 disabled:bg-dark-500 disabled:text-light-900',
          variant === 'outlined' &&
            'bg-inherit border border-primary-500 text-primary-500 hover:text-primary-100 hover:border-primary-100' +
              ' active:text-primary-700 active:border-primary-700 active:border focus:border-2 focus:text-primary-700 focus:border-primary-700 disabled:text-primary-900 disabled:border-primary-900',
          variant === 'ghost' &&
            'bg-inherit text-primary-500 hover:text-primary-100 active:text-primary-700 active:border-none',
          ' focus:border-2 focus:border-primary-700 focus:text-primary-700 disabled:text-primary-900',
          fullWidth && 'flex justify-center w-full',
          className
        )}
        ref={ref}
        {...restProps}
      />
    )
  }
)
