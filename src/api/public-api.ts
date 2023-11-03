import {createApi} from "@reduxjs/toolkit/query/react";
import BASE_QUERY from "./BASE_QUERY";

const publicApi = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "publicApi",
  tagTypes: ["gallery", "hotels"],
  endpoints: (builder) => ({
    getHotelGallery: builder.query({
      query: () => "/public/gallery",
      providesTags: ["gallery"],
    }),
    getHotels: builder.query({
      query: (params = {}) => {
        const queryParams = Object.keys(params)
          .map((key) => `${key}=${params[key]}`)
          .join("&");
        return `/public/hotel?${queryParams}`;
      },
      providesTags: ["hotels"],
    }),
  }),
});

export const {useGetHotelGalleryQuery, useGetHotelsQuery} = publicApi;
export default publicApi;
