import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./header.component";

const meta: Meta = {
    component: Header,
    title: "02. Components/Header"
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>;

export const WithLogo: Story = {}

export const LogoWithLink: Story = {
    args: {
        children: "Logo",
    },
    render: (args) => {

        return (
            <a href={'https://tornata.ru/'}>
                <Header {...args} />
            </a>
        )
    }
}
