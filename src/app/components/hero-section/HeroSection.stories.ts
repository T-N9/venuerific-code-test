import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from ".";

const meta: Meta<typeof HeroSection> = {
    title: "LandingPage/HeroSection",
    component: HeroSection,
  
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};