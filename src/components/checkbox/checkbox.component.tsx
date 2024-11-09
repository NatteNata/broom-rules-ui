import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import Checkmark from '../../assets/icons/components/Checkmark'
import { cn } from '../../utils/merge-class-names'
import { useGenerateId } from '../../utils/use-generate-id'
import { Label } from '../input/input.component'

type CheckboxProps = {
  helperMessage?: string
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, disabled, helperMessage, id, label, required, ...props }, ref) => {
    const ID = useGenerateId(id)

    return (
      <div className={cn('flex items-center')}>
        <div
          className={cn(
            'flex justify-center align-center p-2 rounded-full hover:bg-dark-300 active:bg-dark-100 w-8 h-8' +
              ' relative transition-opacity duration-200 opacity-0' +
              'peer-focus:opacity-100 peer-checked:opacity-100 w-9 h-9'
          )}
        >
          <RadixCheckbox.Root
            className={cn(
              'peer appearance-none h-5 w-5 shrink-0 rounded-[3px] border-2 border-light-100',
              'ring-offset-background mb-0',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:bg-dark-100 disabled:border-light-900 ',
              'data-[state=checked]:bg-light-100 disabled:data-[state=checked]:bg-dark-100',
              'invalid:border-danger-500',
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            <RadixCheckbox.Indicator className={cn('flex align-middle justify-center')}>
              <Checkmark className={cn('pb-1 h-5 w-8 stroke-2 stroke-dark-900')} />
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </div>
        <Label
          className={cn(
            'ml-1 text-sm font-normal text-light-100 mb-0',
            disabled && 'text-light-900'
          )}
          disabled={disabled}
          forId={ID}
          label={label}
          required={required}
        />
      </div>
    )
  }
)

Checkbox.displayName = RadixCheckbox.Root.displayName
