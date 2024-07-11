import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

const meta: Meta<typeof Navigation> = {
  title: "Navigation/Navigation Bar",
  component: Navigation,

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};