import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import api from '../../api/index';
export const taskApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ['Ports', 'Search', 'Pages', 'Ticket', 'Faq'],
  endpoints: builder => ({
    airports: builder.query({
      query: () => '/airports',
      providesTags: ['Ports'],
    }),
    getAirports: builder.query({
      query: id => ({
        url: `/airports/${id}`,
        method: 'GET',
      }),
    }),
    addAirports: builder.mutation({
      query: airport => ({
        url: '/airports',
        method: 'POST',
        body: airport,
      }),
      invalidatesTags: ['Ports'],
    }),
    updateAirports: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `/airports/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Ports'],
    }),
    deleteAirports: builder.mutation({
      query: id => ({
        url: `/airports/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Ports'],
    }),
    // Search
    search: builder.query({
      query: args => {
        const {
          airport_id,
          pickup_date,
          pickup_time,
          departure_date,
          departure_time,
          no_of_days,
          bookingfor,
          promo,
          promo2,
          filter1,
          filter2,
          filter3,
        } = args;
        return {
          url: '/search',
          method: 'GET',
          params: {
            airport_id,
            pickup_date,
            pickup_time,
            departure_date,
            departure_time,
            no_of_days,
            bookingfor,
            promo,
            promo2,
            filter1,
            filter2,
            filter3,
          },
        };
      },
      providesTags: ['Search'],
    }),
    faq: builder.query({
      query: () => '/faq',
      providesTags: ['Faq'],
    }),
    pages: builder.query({
      query: args => {
        const {type, linkmatch} = args;
        return {
          url: '/pages',
          method: 'GET',
          params: {
            type,
            linkmatch,
          },
        };
      },
      providesTags: ['Pages'],
    }),
    ticket: builder.query({
      query: () => '/tickets',
      providesTags: ['Ticket'],
    }),
    getTicket: builder.query({
      query: args => {
        const {ticket_refrence, email} = args;
        return {
          url: '/tickets',
          method: 'GET',
          params: {
            ticket_refrence,
            email,
          },
        };
      },
    }),
    addTicket: builder.mutation({
      query: ticket => ({
        url: '/tickets',
        method: 'POST',
        body: ticket,
      }),
      invalidatesTags: ['Ticket'],
    }),
  }),
});
export const {
  useAddAirportsMutation,
  useDeleteAirportsMutation,
  useGetAirportsQuery,
  useAirportsQuery,
  useSearchQuery,
  useUpdateAirportsMutation,
  useFaqQuery,
  usePagesQuery,
  useTicketQuery,
  useGetTicketQuery,
  useAddTicketMutation,
} = taskApi;
