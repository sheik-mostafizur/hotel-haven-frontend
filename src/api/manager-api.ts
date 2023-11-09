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
  tagTypes: ["managerHotel"],
  endpoints: (builder) => ({
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
  }),
});

export const {
  useGetManagerHotelQuery,
  usePostManagerHotelMutation,
  useUpdateManagerHotelMutation,
} = managerApi;
export default managerApi;
