import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Checkmark from '@/assets/icons/components/Checkmark'
import { Label } from '@/components/input/input.component'
import { cn } from '@/utils'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

type CheckboxProps = {
  helperMessage?: string
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, helperMessage, label, required, ...props }, ref) => (
    <div>
      <Label label={label} required={required} />
      <RadixCheckbox.Root
        className={cn(
          'appearance-none peer h-4 w-4 shrink-0 rounded-sm border-2 border-light-100',
          'checked:bg-light-100 checked:stroke-dark-900 ',
          'ring-offset-background',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          'invalid:border-danger-500',
          className
        )}
        ref={ref}
        {...props}
      >
        <RadixCheckbox.Indicator className={cn('flex items-center justify-center text-current')}>
          <Checkmark className={'h-4 w-4'} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  )
)

Checkbox.displayName = RadixCheckbox.Root.displayName

export default Checkbox
