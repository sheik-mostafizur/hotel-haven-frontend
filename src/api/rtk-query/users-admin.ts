import {createApi} from "@reduxjs/toolkit/query/react";
import BASE_QUERY from "./BASE_QUERY";

const api = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "usersAdmin",
  tagTypes: ["usersAdmin"],
  endpoints: (builder) => ({
    getUsersAdmin: builder.query({
      query: () => "/admin/user",
      providesTags: ["usersAdmin"],
    }),
  }),
});

export const {useGetUsersAdminQuery} = api;

export default api;
