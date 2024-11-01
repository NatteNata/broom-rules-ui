import { Meta, StoryObj } from '@storybook/react'

import Input from './input.component'

const meta = {
  component: Input,
  title: 'Input Component',
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    label: 'Email',
  },
}
