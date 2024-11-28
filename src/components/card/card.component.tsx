import { ComponentPropsWithoutRef, ElementRef, ElementType, JSX, Ref, forwardRef } from 'react'

import { cn } from '../../utils/merge-class-names'

type CardProps<T extends ElementType = 'div'> = {
  asElement?: T
} & {
  ref?: Ref<ElementRef<T>>
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(
    { asElement, className, ...restProps }: CardProps<T>,
    ref: Ref<ElementRef<T>>
  ) => {
    const Component = (asElement ?? 'div') as ElementType

    return (
      <Component
        className={cn('flex bg-dark-500 border border-dark-300 font-inter', className)}
        ref={ref}
        {...restProps}
      />
    )
  }
) as <T extends ElementType = 'div'>(props: CardProps<T>) => JSX.Element
