import { useCallback } from 'react';
import { HotelsResponse } from 'types/hotelModels';

export const useRandomizeHotels = (hotels: HotelsResponse) => {
  const randomizeHotels = useCallback(() => {
    if (hotels) {
      return [...hotels].sort(() => 0.5 - Math.random());
    }
  }, [hotels]);
  return { randomizeHotels };
};
