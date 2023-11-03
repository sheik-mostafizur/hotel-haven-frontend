import {createApi} from "@reduxjs/toolkit/dist/query/react";
import BASE_QUERY from "./BASE_QUERY";

const adminApi = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "adminApi",
  tagTypes: ["usersAdmin", "hotelsAdmin"],
  endpoints: (builder) => ({
    // Users Routes
    getUsersAdmin: builder.query({
      query: () => "/admin/user",
      providesTags: ["usersAdmin"],
    }),
    editUserAdmin: builder.mutation({
      query: ({_id, data}) => ({
        url: `/admin/user/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["usersAdmin"],
    }),
    deleteUserAdmin: builder.mutation({
      query: (_id) => ({
        url: `/admin/user/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["usersAdmin"],
    }),
    // Hotels Routes
    getHotelsAdmin: builder.query({
      query: () => "/admin/hotel",
      providesTags: ["hotelsAdmin"],
    }),
    getHotelsByIdAdmin: builder.query({
      query: (_id) => `/admin/hotel/${_id}`,
      providesTags: ["hotelsAdmin"],
    }),
    editHotelStatusAdmin: builder.mutation({
      query: ({_id, data}) => ({
        url: `/admin/hotel/status/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["hotelsAdmin"],
    }),
  }),
});

export const {
  useGetUsersAdminQuery,
  useEditUserAdminMutation,
  useDeleteUserAdminMutation,
  useGetHotelsAdminQuery,
  useGetHotelsByIdAdminQuery,
  useEditHotelStatusAdminMutation,
} = adminApi;
export default adminApi;
