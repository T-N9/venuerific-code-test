import type { Meta, StoryObj } from "@storybook/react";
import FooterSection from ".";

const meta: Meta<typeof FooterSection> = {
    title: "LandingPage/FooterSection",
    component: FooterSection,
  
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};