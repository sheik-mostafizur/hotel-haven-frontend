import {createApi} from "@reduxjs/toolkit/dist/query/react";
import BASE_QUERY from "./BASE_QUERY";

const adminApi = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "adminApi",
  tagTypes: ["usersAdmin", "hotelsAdmin"],
  endpoints: (builder) => ({
    getUsersAdmin: builder.query({
      query: () => "/admin/user",
    }),
    getHotelsAdmin: builder.query({
      query: () => "/admin/hotel",
    }),
  }),
});

export const {useGetUsersAdminQuery, useGetHotelsAdminQuery} = adminApi;
export default adminApi;
