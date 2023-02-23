import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const api = 'https://api.worldota.net/api/b2b/v3/';
export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ['Hotel', 'Data'],

  endpoints: builder => ({
    addHotelSearchById: builder.query({
      query: data => ({
        url: 'search/hp',
        headers: {
          Authorization:
            'Basic MzQ1Njo0ZWZmZjhlZi02MDhiLTQ2NmItOTBjZS1jMTk0MTE4OWUwN2Y=',
        },
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hotel'],
    }),
    addHotelInfoById: builder.query({
      query: data => ({
        url: 'hotel/info/',
        headers: {
          Authorization:
            'Basic MzQ1Njo0ZWZmZjhlZi02MDhiLTQ2NmItOTBjZS1jMTk0MTE4OWUwN2Y=',
        },
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hotel'],
    }),
    addHotelSearchByRegionId: builder.query({
      query: data => ({
        url: 'search/serp/region',
        headers: {
          Authorization:
            'Basic MzQ1Njo0ZWZmZjhlZi02MDhiLTQ2NmItOTBjZS1jMTk0MTE4OWUwN2Y=',
        },
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hotel'],
    }),
  }),
});
export const {
  useAddHotelSearchByIdQuery,
  useAddHotelInfoByIdQuery,
  useAddHotelSearchByRegionIdQuery,
} = hotelApi;
