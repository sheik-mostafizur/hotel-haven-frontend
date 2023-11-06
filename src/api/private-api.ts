import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {axios} from ".";

const privateApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: axios.defaults.baseURL,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
        headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      }
      return headers;
    },
  }),
  reducerPath: "privateApi",
  tagTypes: ["wishlist"],

  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => "/wishlist",
      providesTags: ["wishlist"],
    }),
    postWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlistById: builder.mutation({
      query: (_id) => ({
        url: `/wishlist/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  usePostWishlistMutation,
  useDeleteWishlistByIdMutation,
} = privateApi;

export default privateApi;
