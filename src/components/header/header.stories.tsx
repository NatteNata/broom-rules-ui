import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header.component";
import { LogoComponent } from "./logo.component";

const meta: Meta = {
	component: Header,
	title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLogo: Story = {
	args: {
		children: "Logo",
	},
	render: (args) => {
		return (
			<Header {...args}>
				<LogoComponent />
			</Header>
		);
	},
};

export const LogoWithLink: Story = {
	args: {
		children: "Logo",
	},
	render: (args) => {
		return (
			<Header {...args}>
				<a href={"https://tornata.ru/"}>
					<LogoComponent />
				</a>
			</Header>
		);
	},
};
