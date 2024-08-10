import { Button } from "./button";
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

const meta = {
  component: Button,
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
    children: "Full Width",
    variant: "secondary",
  },
  render: (args) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const anchorRef = useRef<HTMLAnchorElement>(null);
    return (
      <div>
        <Button {...args} asChild>
          <a href="https://google.com" target="_blank" ref={anchorRef}>
            Go to google
          </a>
        </Button>
        <Button
          {...args}
          ref={buttonRef}
          onClick={() => alert("clicked nice button")}
        >
          Nice button
        </Button>
        <button onClick={() => buttonRef.current?.click()}>Button</button>
      </div>
    );
  },
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    children: "Link",
  },
};
