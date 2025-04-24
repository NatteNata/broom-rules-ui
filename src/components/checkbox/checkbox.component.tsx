import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type ReactNode,
	forwardRef,
} from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { IconCheckmark } from '@assets'
import { Label } from '@components'
import { cn } from '@utils'
import { useGenerateId } from '@utils'

type CheckboxProps = {
	helperMessage?: string
	label?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<
	ElementRef<typeof RadixCheckbox.Root>,
	CheckboxProps
>(
	(
		{ className, disabled, helperMessage, id, label, required, ...restProps },
		ref,
	) => {
		const finalId = useGenerateId(id)

		return (
			<div className={cn('flex items-center')}>
				{/* Основная обертка для ховер-эффектов */}
				<div
					className={cn(
						'flex h-8 w-8 justify-center rounded-full p-2',
						'hover:bg-dark-300 active:bg-dark-100',
						className,
					)}
				>
					<RadixCheckbox.Root
						className={cn(
							'peer h-5 w-5 shrink-0 appearance-none rounded-[3px] border-2 border-light-100',
							'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
							'disabled:cursor-not-allowed disabled:border-light-900 disabled:bg-dark-100',
							'data-[state=checked]:bg-light-100 disabled:data-[state=checked]:bg-dark-100',
							'invalid:border-danger-500',
						)}
						disabled={disabled}
						id={finalId}
						ref={ref}
						{...restProps}
					>
						<RadixCheckbox.Indicator className='flex items-center justify-center'>
							<IconCheckmark className='h-[18px] w-[18px] stroke-2 stroke-dark-900' />
						</RadixCheckbox.Indicator>
					</RadixCheckbox.Root>
				</div>

				{label && (
					<Label
						className={cn(
							'ml-2 font-normal text-light-100 text-sm',
							disabled && 'text-light-900',
						)}
						htmlFor={finalId}
						label={label}
						required={required}
					/>
				)}
			</div>
		)
	},
)
/*
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import IconCheckmark from '../../assets/icons/components/Checkmark'

export const CheckboxComponent = () => {
	return (
		<RadixCheckbox.Root className='flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300'>
			<RadixCheckbox.Indicator>
				<IconCheckmark className='h-3 w-3 text-black' />
			</RadixCheckbox.Indicator>
		</RadixCheckbox.Root>
	)
}*/
