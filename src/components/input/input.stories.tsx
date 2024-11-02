import { Meta, StoryObj } from '@storybook/react'

import SimpleInput, { SearchInput } from './input.component'

const meta = {
  argTypes: {
    type: {
      control: 'select',
      description: 'Select an input type',
      options: ['email', 'search', 'text', 'tel', 'password'],
    },
  },
  component: SimpleInput,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof SimpleInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email',
    placeholder: 'yourmail@example.com',
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    name: 'email',
    placeholder: 'yourmail@example.com',
    required: true,
  },
  render: args => (
    <div>
      <SimpleInput {...args} />
      <SimpleInput {...args} />
    </div>
  ),
}

export const Search: Story = {
  args: {
    name: 'search',
    placeholder: 'yourmail@example.com',
    required: true,
    type: 'search',
  },
  render: args => (
    <div>
      <SearchInput name={'search'} placeholder={'input search'} {...args} />
    </div>
  ),
}
