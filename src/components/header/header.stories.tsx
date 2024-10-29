import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./header.component";
import {Logo} from "./Logo";

const meta: Meta = {
    component: Header,
    title: "02. Components/Header"
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>;

export const WithLogo: Story = {
    args: {
        children: "Logo",
    },
    render: (args) => {
        return <Header {...args}>
            <Logo/>
        </Header>
    }
}

export const LogoWithLink: Story = {
    args: {
        children: "Logo",
    },
    render: (args) => {

        return (
            <Header {...args}>
                <a href={'https://tornata.ru/'}>
                    <Logo/>
                </a>
            </Header>
        )
    }
}
