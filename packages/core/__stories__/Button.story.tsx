import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "../src";

export default {
	title: "Button",
	component: Button
} as Meta;


export const Default: Story = () => (
	<Button>Hello World</Button>
);