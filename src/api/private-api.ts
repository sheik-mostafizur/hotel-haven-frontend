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
  tagTypes: [
    "roomDetails",
    "rooms",
    "hotelReview",
    "bookingHistory",
    "wishlist",
    "profile",
    "blogs",
    "blogBookmark",
    "blogLike",
  ],

  endpoints: (builder) => ({
    getRoomDetails: builder.query({
      query: (_id) => `/room/${_id}`,
      providesTags: ["roomDetails"],
    }),
    getRoomsByIds: builder.query({
      query: (roomIds) => ({
        url: `/room/roomIds`,
        params: roomIds.map((id: string) => `roomIds=${id}`).join("&"),
      }),
      providesTags: ["rooms"],
    }),

    postHotelReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["hotelReview"],
    }),

    getBookingHistory: builder.query({
      query: () => `/booking`,
      providesTags: ["bookingHistory"],
    }),

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

    // users profile
    getProfileById: builder.query({
      query: (_id) => `/profile/${_id}`,
      providesTags: ["profile"],
    }),

    // logged in user profile
    getProfile: builder.query({
      query: () => `/profile`,
      providesTags: ["profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),

    // Blogs for user
    getUserBlogById: builder.query({
      query: (_id) => `/blog/user-blog/${_id}`,
      providesTags: ["blogs"],
    }),
    updateUserBlogById: builder.mutation({
      query: ({_id, data}) => ({
        url: `/blog/user-blog/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteUserBlogById: builder.mutation({
      query: (_id) => ({
        url: `/blog/user-blog/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
    getUserBlogs: builder.query({
      query: () => "/blog/user-blog",
      providesTags: ["blogs"],
    }),
    postUserBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/user-blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),

    // blogs for all users
    getBlogById: builder.query({
      query: (_id) => `/blog/${_id}`,
      providesTags: ["blogs"],
    }),

    // blogBookmark
    getBlogBookmark: builder.query({
      query: () => "/blog/bookmark",
      providesTags: ["blogBookmark"],
    }),
    postBlogBookmark: builder.mutation({
      query: (data) => ({
        url: "/blog/bookmark",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogBookmark"],
    }),
    deleteBlogBookmarkById: builder.mutation({
      query: (_id) => ({
        url: `/blog/bookmark/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogBookmark"],
    }),

    // blogLike
    getLiked: builder.query({
      query: () => "/blog/liked",
      providesTags: ["blogLike"],
    }),
    postLikeBlog: builder.mutation({
      query: (_id) => ({
        url: `/blog/${_id}/like`,
        method: "POST",
      }),
      invalidatesTags: ["blogLike"],
    }),
    removeLikeBlog: builder.mutation({
      query: (_id) => ({
        url: `/blog/${_id}/unlike`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogLike"],
    }),
  }),
});

export const {
  useGetRoomDetailsQuery,
  useGetRoomsByIdsQuery,

  usePostHotelReviewMutation,

  useGetBookingHistoryQuery,

  useGetWishlistQuery,
  usePostWishlistMutation,
  useDeleteWishlistByIdMutation,

  useGetProfileByIdQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,

  useGetUserBlogByIdQuery,
  useDeleteUserBlogByIdMutation,
  useGetUserBlogsQuery,
  usePostUserBlogMutation,
  useGetBlogByIdQuery,

  useGetBlogBookmarkQuery,
  usePostBlogBookmarkMutation,
  useDeleteBlogBookmarkByIdMutation,

  useGetLikedQuery,
  usePostLikeBlogMutation,
  useRemoveLikeBlogMutation,
} = privateApi;

export default privateApi;
