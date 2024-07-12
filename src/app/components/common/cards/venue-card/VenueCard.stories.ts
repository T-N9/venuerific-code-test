import { Meta, StoryObj } from "@storybook/react";
import VenueCard from ".";
import { Venue } from "@/types/venuesToJoin";

// Mock data for the VenueCard
const mockVenue: Venue = {
  id: 1,
  name: "Grand Hall",
  address: "123 Main St, Cityville",
  keyword: "Luxury",
  super_venue: true,
  price: "$2000",
  rating: 4.5,
  total_review: 120,
  image: "https://via.placeholder.com/306x182.png",
  standing_guest: 200,
  sitting_guest: 100,
};

export default {
  title: "Common/VenueCard",
  component: VenueCard,
} as Meta;

const meta = {
  title: "Common/VenueCard",
  component: VenueCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VenueCard>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockVenue },
};
