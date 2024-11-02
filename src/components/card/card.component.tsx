import { ComponentPropsWithoutRef, ElementRef, ElementType, JSX, Ref, forwardRef } from 'react'

import { cn } from '@/utils'

type CardProps<T extends ElementType = 'div'> = {
  asElement?: T
} & {
  ref?: Ref<ElementRef<T>>
} & ComponentPropsWithoutRef<T>

const Card = forwardRef(
  <T extends ElementType = 'div'>(
    { asElement, className, ...restProps }: CardProps<T>,
    ref: Ref<ElementRef<T>>
  ) => {
    const Component = (asElement ?? 'div') as ElementType

    return (
      <Component
        className={cn('flex bg-dark-400 border border-dark-300 font-inter', className)}
        ref={ref}
        {...restProps}
      />
    )
  }
) as <T extends ElementType = 'div'>(props: CardProps<T>) => JSX.Element

export default Card