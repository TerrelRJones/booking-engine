import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel, HotelArg, HotelsResponse } from 'types/hotelModels';
import { UserResponse } from 'types/user';

export const endpoint = {
  getHotels: (params: HotelArg) => `/hotels/${params}`,
};

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: builder => ({
    getHotels: builder.query<HotelsResponse, null>({
      query: () => endpoint.getHotels('/'),
    }),
    getHotel: builder.query<Hotel, HotelArg>({
      query: params => endpoint.getHotels(params),
    }),
    getUser: builder.query<UserResponse, null>({
      query: () => '/user',
    }),
  }),
});

export const { useGetHotelsQuery } = hotelApi;
export const { useGetHotelQuery } = hotelApi;
export const { useGetUserQuery } = hotelApi;
