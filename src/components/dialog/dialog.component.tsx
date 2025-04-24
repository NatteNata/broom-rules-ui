import { IconClose } from '@assets'
import { Button, Card, Typography } from '@components'
import * as Dialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

type Props = {
	title: string
	description: string
	buttonTitle: string
	children?: ReactNode
}
export const DialogComponent = ({ buttonTitle, description, title }: Props) => {
	return (
		<Dialog.Root>
			<Dialog.Trigger />
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content>
					<Card>
						<Dialog.Title className='border-dark-100 border-b'>
							<Typography variant='h1' asElement='h1'>
								{title}
							</Typography>
						</Dialog.Title>
						<Dialog.Description>
							<Typography variant='regular_text_16' asElement='p'>
								{description}
							</Typography>
						</Dialog.Description>
						<Dialog.Close>
							<Button variant='primary'>{buttonTitle}</Button>
						</Dialog.Close>
						<Dialog.Close>
							<IconClose />
						</Dialog.Close>
					</Card>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
