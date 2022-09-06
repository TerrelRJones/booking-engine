import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const endpoint = {
  getHotels: () => ``,
};

export const transformResult = result => {
  return {};
};

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: builder => ({
    getHotels: builder.query({
      query: params => endpoint.getHotels(params),
      transformResponse: response => {
        return response.hotels.map(transformResult);
      },
    }),
  }),
});

export const { useGetHotelsQuery } = hotelApi;
