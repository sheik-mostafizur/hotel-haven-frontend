import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {axios} from ".";

const managerApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: axios.defaults.baseURL,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
        headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      }
      return headers;
    },
  }),
  reducerPath: "managerApi",
  tagTypes: ["managerInfo", "managerHotel", "managerRoom", "bookingHistory"],
  endpoints: (builder) => ({
    getManagerInfo: builder.query({
      query: () => "/manager",
      providesTags: ["managerInfo"],
    }),
    getManagerHotel: builder.query({
      query: () => "/manager/hotel",
      providesTags: ["managerHotel"],
    }),
    postManagerHotel: builder.mutation({
      query: (data) => ({
        url: "/manager/hotel",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["managerHotel"],
    }),
    updateManagerHotel: builder.mutation({
      query: (data) => ({
        url: "/manager/hotel",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["managerHotel"],
    }),
    updateManagerRoom: builder.mutation({
      query: ({data, _id}) => ({
        url: `/manager/room/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["managerRoom"],
    }),
    getManagerBookingHistory: builder.query({
      query: () => "/manager/booking-history",
      providesTags: ["bookingHistory"],
    }),
  }),
});

export const {
  useGetManagerInfoQuery,
  useGetManagerHotelQuery,
  usePostManagerHotelMutation,
  useUpdateManagerHotelMutation,
  useUpdateManagerRoomMutation,
  useGetManagerBookingHistoryQuery,
} = managerApi;
export default managerApi;
