import useSWR from 'swr';
import { VenueData } from '../types/venuesToJoin'
import { VENUE_DATA_URL } from '@/constants/api';

const fetcher = (url: string): Promise<VenueData> => fetch(url).then(res => res.json());

export const useVenueData = () => {
  const { data, error } = useSWR<VenueData>(VENUE_DATA_URL, fetcher);

  return {
    data: data?.data.venues,
    error,
    isLoading: !error && !data,
  };
};
