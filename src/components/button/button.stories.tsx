import { useState } from 'react'

import { Button } from '@/components/button/button.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      control: {},
      description: 'By default, this defines Text on the button, unless provided specific props',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      description: 'Chose from a preset array of variants for color and styles',
      options: ['primary', 'secondary', 'outlined', 'ghost'],
    },
  },
  component: Button,
  decorators: [
    Story => (
      <div className={'bg-dark-900 px-12 py-12'}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

/**  title of the button via string text as children*/

export const Primary: Story = {
  args: {
    children: 'Sign up',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Edit',
    variant: 'secondary',
  },
  name: 'Secondary',
}

export const Outlined: Story = {
  args: {
    children: 'Submit',
    variant: 'outlined',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Confirm change',
    variant: 'ghost',
  },
}

/** args as property of a StoryObj define the interactive controls in SB, it's possible to provide args as props directly, but then they will be fixed and not interactive*/

export const WithAction: Story = {
  name: 'Clickable with alert',
  render: args => {
    return (
      <Button {...args} onClick={() => alert('clicked nice button')}>
        Nice button
      </Button>
    )
  },
}

/**   at full width the story clearly shows that if not provided with asChild prop the width of the button doesn't trigger the link accepted as child. If provided with asChild: true -- the whole button acts as link.
 no need for a ref*/

export const AsChild: Story = {
  args: {
    ...Primary.args,
    asChild: true,
    fullWidth: true,
  },
  name: 'Link as Child',
  render: args => {
    return (
      <div>
        <Button {...args}>
          <a href={'https://google.com'} rel={'noreferrer'} target={'_blank'}>
            Go to google
          </a>
        </Button>
      </div>
    )
  },
}

export const CkickableCounter: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
  name: 'Clickable with counter',
  render: args => {
    const [counter, setCounter] = useState(0)

    return (
      <Button {...args} onClick={() => setCounter(counter + 1)}>
        {counter}{' '}
      </Button>
    )
  },
}
