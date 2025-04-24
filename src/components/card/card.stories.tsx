import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card.component";

const meta: Meta<typeof Card> = {
	argTypes: {
		asElement: {
			control: {
				type: "radio",
			},
			description:
				"Changes semantic selectors in HTML, keeping the same appearance",
			options: ["section", "sidebar", "main", "div"],
		},
		children: {
			control: {
				type: "text",
			},
			description:
				"Size depends on the cize of children. Editable text controls",
		},
		ref: {
			table: {
				disable: true,
			},
		},
		style: {
			control: {
				type: "object",
			},
			description: "No styles by default, can be tested with controls",
		},
	},
	component: Card,
	decorators: [
		(Story) => (
			<div className={"bg-dark-900 px-12 py-12"}>
				<Story />
			</div>
		),
	],
	tags: ["autodocs"],
	title: "Components/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		children: "Size adjusts to the size of children",
		style: { color: "#8d9094" },
	},
};

export const WithSetSizes: Story = {
	args: {
		style: {
			color: "#8d9094",
			height: "200px",
			padding: "12px",
			width: "200px",
		},
	},
	name: "With set sizes but no children",
};

export const CardWithLongText: Story = {
	args: {
		children:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lectus risus, vel iaculis arcu tincidunt hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt, magna et congue sodales, nibh erat dapibus augue, quis rutrum diam tortor at metus. Aliquam iaculis malesuada diam nec accumsan. Duis accumsan placerat ligula, sed fringilla tellus sodales rhoncus. Duis pulvinar libero eu porta aliquet. Aliquam erat volutpat. Nam cursus pretium risus a rhoncus. Morbi purus quam, fringilla non ante sed, gravida commodo ligula. Vivamus commodo ex in tortor pharetra varius. Curabitur consequat tellus tortor, at consequat ligula rhoncus a. Mauris convallis pretium dui at interdum.\\n\\nMaecenas semper tortor at mauris rutrum, et faucibus dui euismod. Nulla dapibus quam nec condimentum scelerisque. Maecenas libero odio, consectetur at metus sit amet, dapibus placerat tellus. Curabitur nec urna sit amet nunc viverra bibendum.",
		style: { color: "#8d9094", padding: "12px", width: "500px" },
	},
	name: "Card with long text and some styles",
};
