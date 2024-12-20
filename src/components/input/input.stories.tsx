import { Meta, StoryObj } from '@storybook/react'

import { Input } from './input.component'

const meta: Meta<typeof Input> = {
  argTypes: {
    helperMessage: {
      description: 'Editable error message in controls',
      type: 'string',
    },
    label: {
      control: 'text',
      description: 'Editable in controls',
    },
    name: {
      description: 'Shows up in code, doesnt affect appearance',
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
  decorators: [
    Story => (
      <div className={'min-h-40 flex justify-start items-center py-12 px-20'}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Input',
}

type Story = StoryObj<typeof Input>

export default meta

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
    required: true,
  },
  name: 'Required * and autofill',
  render: args => (
    <div>
      <Input placeholder={'yourmail@example.com'} {...args} />
      <br />
      <br />
      <Input placeholder={'Try autofill with this'} {...args} />
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
    name: 'password',
    placeholder: 'Password',
  },
  render: args => (
    <div>
      <Input type={'password'} {...args} />
    </div>
  ),
}

export const TooLongPlaceholder: Story = {
  args: {
    name: 'password',
    placeholder: 'Min length is 9 characters',
  },
  decorators: [
    Story => (
      <div className={'max-w-60 min-h-40 flex justify-start items-center mx-6'}>
        <Story />
      </div>
    ),
  ],
  name: 'Too long placeholder',
  render: args => (
    <div>
      <Input minLength={9} type={'password'} {...args} />
    </div>
  ),
}

export const MinLengh: Story = {
  args: {
    label: 'Password',
    name: 'password',
    placeholder: 'Min length is 9 characters',
    required: true,
  },
  name: 'Minimum lengh',
  render: args => (
    <div>
      <Input
        helperMessage={'Password must be min 9 characters!'}
        minLength={9}
        type={'password'}
        {...args}
      />
    </div>
  ),
}

export const Error: Story = {
  args: {
    label: 'Email',
    name: 'email',
    placeholder: 'yourmail@example.com',
    required: true,
  },
  name: 'Error in the field',
  render: args => {
    return (
      <div>
        <Input helperMessage={'Please provide a valid email address.'} type={'email'} {...args} />
        <br />
      </div>
    )
  },
}
