import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../utils/merge-class-names'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        {...props}
        className={cn(
          'flex items-center cursor-pointer disabled:cursor-default box-border font-inter gap-2 p-1.5 px-6 rounded transition-colors ease-in-out text-white',
          variant === 'primary' &&
            'bg-accent-500 text-light-100 hover:bg-accent-100 active:bg-accent-700 active:text-light-500' +
              ' focus:bg-accent-500 focus:border-accent-700 focus:border-2 disabled:bg-accent-900 disabled:text-light-900',
          variant === 'secondary' &&
            'bg-dark-300 text-light-100 hover:bg-dark-100 active:bg-dark-400 focus:border focus:border-accent-300 disabled:bg-dark-500 disabled:text-light-900',
          variant === 'outlined' &&
            'bg-inherit border border-accent-500 text-accent-500 hover:text-accent-100 hover:border-accent-100' +
              ' active:text-accent-700 active:border-accent-700 active:border focus:border-2 focus:text-accent-700 focus:border-accent-700 disabled:text-accent-900 disabled:border-accent-900',
          variant === 'ghost' &&
            'bg-inherit text-accent-500 hover:text-accent-100 active:text-accent-700 focus:border-2' +
              ' focus:border-accent-700 focus:text-accent-700 disabled:text-accent-900',
          fullWidth && 'flex justify-center w-full',
          className
        )}
        ref={ref}
      />
    )
  }
)
