import { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'
import { Header } from './header.component'

const meta: Meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const WithLogo: Story = {
  args: {
    children: 'Logo',
  },
  render: args => {
    return (
      <Header {...args}>
        <Logo />
      </Header>
    )
  },
}

export const LogoWithLink: Story = {
  args: {
    children: 'Logo',
  },
  render: args => {
    return (
      <Header {...args}>
        <a href={'https://tornata.ru/'}>
          <Logo />
        </a>
      </Header>
    )
  },
}
