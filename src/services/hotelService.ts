import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotels } from 'types/hotelModels';

export const endpoint = {
  getHotels: () => `/hotels`,
};

export const transformResult = (result: any) => {
  return {};
};

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: builder => ({
    getHotels: builder.query({
      query: params => endpoint.getHotels(),
      // when need transform use this format for additional queries
      // transformResponse: (response: Hotels) => {
      //   return response.hotels.map(transformResult);
      // },
    }),
  }),
});

export const { useGetHotelsQuery } = hotelApi;