import { useCallback } from 'react';
import { Hotel } from 'types/hotelModels';

export const useRandomizeHotels = (hotels: Hotel[]) => {
  const randomizeHotels = useCallback(() => {
    return [...hotels].sort(() => 0.5 - Math.random());
  }, [hotels]);
  return { randomizeHotels };
};
