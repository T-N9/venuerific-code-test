import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};
