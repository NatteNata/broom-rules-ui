import {Button} from "./button.component";
import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";

const meta = {
    component: Button,
    title: "02. Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Choose a variant or input a title in the controls below",
        //title of the button via string text as children
    },
};


export const AsChild: Story = {
    /*   at full width the story clearly shows that if not provided with asChild prop the width of the button doesn't trigger the link accepted as child. If provided with asChild: true -- the whole button acts as link.
    no need for a ref*/
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

export const WithAction: Story = {
    args: {
        ...Primary.args
    },
    render: (...args) => {

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

export const CkickableCounter: Story = {
    args: {
        ...Primary.args,
        fullWidth: true,
    },
    render: (args) => {
        const [counter, setCounter] = useState(0);
        return (
            <Button {...args} children={counter} onClick={() => setCounter(counter + 1)}/>
        )
    }
}



