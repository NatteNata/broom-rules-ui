import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './checkbox.component'
const meta: Meta<typeof CheckboxComponent> = {
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
	component: CheckboxComponent,
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

type Story = StoryObj<typeof CheckboxComponent>

export const AllStates: Story = {
	render: () => (
		<div className='space-y-4'>
			<CheckboxComponent id='interactive-checkbox' label='Interactive' />
			<CheckboxComponent
				id='fixed-checked'
				label='Checked'
				checked
				onCheckedChange={undefined}
			/>
			<CheckboxComponent
				id='fixed-unchecked'
				label='Unchecked'
				checked={false}
				onCheckedChange={undefined}
			/>
			<CheckboxComponent id='disabled-checkbox' label='Disabled' disabled />
			<CheckboxComponent
				id='checkbox5'
				label='Checked + Disabled'
				checked
				disabled
			/>
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