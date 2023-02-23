import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const api = 'https://api.holidayextras.co.uk/';
export const loungesApi = createApi({
  reducerPath: 'loungesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ['LoungeData'],
  endpoints: builder => ({
    searchLounges: builder.query({
      query: args => {
        const {
          airport_id,
          ABTANumber,
          Password,
          Initials,
          key,
          token,
          ArrivalDate,
          ArrivalTime,
          Adults,
          Children,
        } = args;
        return {
          url: `v1/lounge/${airport_id}.js`,
          method: 'GET',
          params: {
            ABTANumber,
            Password,
            Initials,
            key,
            token,
            ArrivalDate,
            ArrivalTime,
            Adults,
            Children,
          },
        };
      },
      providesTags: ['LoungeData'],
    }),
    getLoungesInfo: builder.query({
      query: args => {
        const {MoreInfoURL, ABTANumber, Password, Initials, key, token} = args;

        return {
          url: `${MoreInfoURL}`,
          method: 'GET',
          params: {
            ABTANumber,
            Password,
            Initials,
            key,
            token,
          },
        };
      },
      providesTags: ['LoungeData'],
    }),
  }),
});
export const {useSearchLoungesQuery, useGetLoungesInfoQuery} = loungesApi;
