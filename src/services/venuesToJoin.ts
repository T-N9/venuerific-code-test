import useSWR from 'swr';
import { VenueData } from '../types/venuesToJoin'

const fetcher = (url: string): Promise<VenueData> => fetch(url).then(res => res.json());

export const useVenueData = () => {
  const { data, error } = useSWR<VenueData>('https://staging.venuerific.com/api/test/landing.json', fetcher);

  return {
    data: data?.data.venues,
    error,
    isLoading: !error && !data,
  };
};
