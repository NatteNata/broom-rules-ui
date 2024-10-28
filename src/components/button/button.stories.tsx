import {Button} from "./button.component";
import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";


const meta = {
    component: Button,
    tags: ['autodocs'],
    title: "02. Components/Button",
    argTypes: {
        variant: {
            control: "radio",
            description: "Chose from a preset array of variants for color and styles",
            options: ['primary', 'secondary', 'outlined', 'ghost'],
        },
        fullWidth: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        children: {
            control: {},
            description: "By default, this defines Text on the button, unless provided specific props"
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**  title of the button via string text as children*/

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Sign up",
    },
};

export const Secondary: Story = {
    name: "Secondary",
    args: {
        variant: "secondary",
        children: "Edit",
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        children: "Submit",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Confirm change",
    },
};

/** args as property of a StoryObj define the interactive controls in SB, it's possible to provide args as props directly, but then they will be fixed and not interactive*/

export const WithAction: Story = {
    name: "Clickable with alert",
    render: (args) => {
        return (
            <Button
                {...args}
                onClick={() => alert("clicked nice button")}
            >
                Nice button
            </Button>
        )
    }
}

/**   at full width the story clearly shows that if not provided with asChild prop the width of the button doesn't trigger the link accepted as child. If provided with asChild: true -- the whole button acts as link.
 no need for a ref*/

export const AsChild: Story = {
    name: "Link as Child",
    args: {
        ...Primary.args,
        fullWidth: true,
        asChild: true,
    },
    render: (args) => {
        return (
            <div>
                <Button {...args}>
                    <a href="https://google.com" target="_blank">
                        Go to google
                    </a>
                </Button>
            </div>
        );
    },
};


export const CkickableCounter: Story = {
    args: {
        ...Primary.args,
        fullWidth: true,
    },
    name: "Clickable with counter",
    render: (args) => {
        const [counter, setCounter] = useState(0);
        return (
            <Button {...args} children={counter} onClick={() => setCounter(counter + 1)}/>
        )
    }
}



