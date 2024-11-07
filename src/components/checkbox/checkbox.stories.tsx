import { Meta, StoryObj } from '@storybook/react'

import Checkbox from './checkbox.component'

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
      <div className={'min-h-40 px-20 py-20'}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Checkbox',
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {
    id: 'tacs',
  },
}

export const Labeled: Story = {
  args: {
    id: 'tacs',
    label: 'Terms and Conditions',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    id: 'tacs',
    label: 'Terms and Conditions',
  },
}
