export interface Venue {
    id: number;
    name: string;
    address: string;
    keyword: string;
    super_venue: boolean;
    price: string;
    rating: number;
    total_review: number;
    image: string;
    standing_guest: number;
    sitting_guest: number;
  }
  
  export interface VenueData {
    message: string;
    status: number;
    data: {
      venues: Venue[];
    };
  }
  