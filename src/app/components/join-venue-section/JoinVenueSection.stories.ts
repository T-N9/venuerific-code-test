import type { Meta, StoryObj } from "@storybook/react";
import JoinVenueSection from ".";

const meta: Meta<typeof JoinVenueSection> = {
    title: "LandingPage/JoinVenueSection",
    component: JoinVenueSection,
    argTypes: {
        isLoading: {
          control: 'boolean',
          defaultValue: false,
        },
      },
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {
    args: {
        isLoading: false
      },
  };

//   export const Loading: Story = {
//     args: {
//         isLoading: true
//       },
//   };