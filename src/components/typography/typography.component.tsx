import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, ElementType, Ref, forwardRef } from 'react'

import { cn } from '../../utils'

type TypographyVariant =
  | 'bold_text_14'
  | 'bold_text_16'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'medium_text_14'
  | 'regular_link'
  | 'regular_text_14'
  | 'regular_text_16'
  | 'semi-bold_small_text'
  | 'small_link'
  | 'small_text'

type CardProps<T extends ElementType = 'span'> = {
  asElement?: T
  variant?: TypographyVariant
} & {
  ref?: Ref<ElementRef<T>>
} & ComponentPropsWithoutRef<T>

export const Typography = forwardRef(
  <T extends ElementType = 'span'>(
    { asElement, children, className, variant = 'regular_text_16', ...restProps }: CardProps<T>,
    ref: Ref<ElementRef<T>>
  ) => {
    const Component = getComponent(variant, asElement)

    return (
      <Component
        className={cn(
          variant === 'large' && 'text-2xl/9 font-semibold',
          variant === 'h1' && 'text-xl/9 font-bold',
          variant === 'h2' && 'text-lg/6 font-bold',
          variant === 'h3' && 'text-base font-semibold',
          variant === 'regular_text_16' && 'text-base font-normal',
          variant === 'bold_text_16' && 'text-base font-bold',
          variant === 'regular_text_14' && 'text-sm/6 font-normal',
          variant === 'medium_text_14' && 'text-sm/6 font-medium',
          variant === 'bold_text_14' && 'text-sm/6 font-bold',
          variant === 'small_text' && 'text-xs/4 font-normal',
          variant === 'error' && 'text-danger-500 text-xs/4 font-normal',
          variant === 'semi-bold_small_text' && 'text-xs/4 font-semibold',
          variant === 'regular_link' && 'text-accent-500 text-sm/6 font-normal underline',
          variant === 'small_link' && 'text-accent-500 text-xs/4 font-normal underline',
          className
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </Component>
    )
  }
)

const getComponent = <T extends ElementType>(variant: TypographyVariant, as?: T) => {
  if (as) {
    return as
  }

  switch (variant) {
    case 'large':
      return 'h1'
    case 'h1':
      return 'h2'
    case 'h2':
      return 'h3'
    case 'h3':
      return 'h4'
    default:
      return 'p'
  }
}
