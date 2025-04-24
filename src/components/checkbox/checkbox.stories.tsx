import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@components'
const meta: Meta<typeof Checkbox> = {
	argTypes: {
		disabled: {
			control: 'boolean',
			description: 'Choose state in controls',
		},
		id: {
			control: 'text',
			description: 'Shows only in code',
		},
		label: {
			control: 'text',
			description: 'Editable in controls',
		},
	},
	component: Checkbox,
	decorators: [
		Story => (
			<div className={'min-h-40 bg-dark-900 px-20 py-20'}>
				<Story />
			</div>
		),
	],
	tags: ['autodocs'],
	title: 'Components/Checkbox',
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const AllStates: Story = {
	render: () => (
		<div className='space-y-4'>
			<Checkbox id='interactive-checkbox' label='Interactive' />
			<Checkbox
				id='fixed-checked'
				label='Checked'
				checked
				onCheckedChange={undefined}
			/>
			<Checkbox
				id='fixed-unchecked'
				label='Unchecked'
				checked={false}
				onCheckedChange={undefined}
			/>
			<Checkbox id='disabled-checkbox' label='Disabled' disabled />
			<Checkbox id='checkbox5' label='Checked + Disabled' checked disabled />
		</div>
	),
}

export const Interactive: Story = {
	args: {
		id: 'interactive-checkbox',
		label: 'Click me (interactive)',
	},
}

export const Checked: Story = {
	args: {
		id: 'fixed-checked',
		label: 'Checked (fixed)',
		checked: true,
		onCheckedChange: undefined,
	},
}

export const Unchecked: Story = {
	args: {
		id: 'fixed-unchecked',
		label: 'Unchecked (fixed)',
		checked: false,
		onCheckedChange: undefined,
	},
}

export const Disabled: Story = {
	args: {
		checked: true,
		disabled: true,
		id: 'disabled-checkbox',
		label: 'Disabled',
	},
}
