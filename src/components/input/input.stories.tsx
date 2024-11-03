import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Input from './input.component'

const meta = {
  argTypes: {
    error: {
      description: 'Editable in controls',
      type: 'boolean',
    },
    label: {
      control: 'text',
      description: 'Toggles in controls',
    },
    name: {
      description: 'Change shows up in code, doesnt affect appearance',
    },
    placeholder: {
      control: 'text',
      description: 'Editable in controls',
    },
    required: {
      description: 'Shows a red * with Label',
      type: 'boolean',
    },
    type: {
      control: 'radio',
      description: 'Changes appearance for search and password',
      options: ['email', 'search', 'text', 'password'],
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

export const MinLengh: Story = {
  args: {
    name: 'Password',
    placeholder: 'Min length is 9 characters',
  },
  name: 'Minimum lengh',
  render: args => (
    <div>
      <Input minLength={9} type={'password'} {...args} />
    </div>
  ),
}

export const Error: Story = {
  args: {
    name: 'email',
    placeholder: 'yourmail@example.com',
  },
  name: 'Error',
  render: args => {
    const [errorOne, setErrorOne] = useState(false)

    return (
      <div>
        <Input error={errorOne} type={'email'} {...args} />
        <br />
        <button
          onClick={() => setErrorOne(!errorOne)}
          style={{ backgroundColor: 'orange', borderRadius: '20px', padding: '6px' }}
          type={'button'}
        >
          Imitate error
        </button>
      </div>
    )
  },
}
