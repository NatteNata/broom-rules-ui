import { Meta, StoryObj } from '@storybook/react'

import Input from './input.component'

const meta = {
  argTypes: {
    type: {
      control: 'select',
      description: 'Select an input type',
      options: ['email', 'search', 'text', 'tel', 'password'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

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
      <Input {...args} />
      <Input {...args} />
    </div>
  ),
}

export const Search: Story = {
  args: {
    name: 'search',
    placeholder: 'input search',
    type: 'search',
  },
  render: args => (
    <div>
      <Input {...args} />
    </div>
  ),
}

export const Password: Story = {
  args: {
    name: 'Password',
    placeholder: 'Password',
  },
  render: args => (
    <div>
      <Input type={'password'} {...args} />
    </div>
  ),
}
