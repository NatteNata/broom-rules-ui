import { Meta, StoryObj } from '@storybook/react'

import Checkbox from './checkbox.component'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disabled controls',
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
