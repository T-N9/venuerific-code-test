import type { Meta, StoryObj } from "@storybook/react";
import IntroSection from ".";

const meta: Meta<typeof IntroSection> = {
    title: "LandingPage/IntroSection",
    component: IntroSection,
  
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};