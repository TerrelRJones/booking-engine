import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotels } from 'types/hotelModels';

export const endpoint = {
  getHotels: (params: string) => `/hotels/${params}`,
};

export interface UserResponse {
  id: string;
  name: string;
  image: string;
  hotelBooked: [];
  dates: [];
  totalDuel: [];
}

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: builder => ({
    getHotels: builder.query({
      query: params => endpoint.getHotels('/'),
    }),
    getHotel: builder.query({
      query: params => endpoint.getHotels(params),
    }),
    getUser: builder.query<UserResponse, null>({
      query: params => '/user',
    }),
  }),
});

export const { useGetHotelsQuery } = hotelApi;
export const { useGetHotelQuery } = hotelApi;
export const { useGetUserQuery } = hotelApi;
