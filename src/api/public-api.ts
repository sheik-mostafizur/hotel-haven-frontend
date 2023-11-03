import {createApi} from "@reduxjs/toolkit/query/react";
import BASE_QUERY from "./BASE_QUERY";

const publicApi = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "publicApi",
  tagTypes: ["gallery", "topHotels"],
  endpoints: (builder) => ({
    getHotelGallery: builder.query({
      query: () => "/public/gallery",
      providesTags: ["gallery"],
    }),
    getBestHotels: builder.query({
      query: () => "/public/hotel",
      providesTags: ["topHotels"],
    }),
  }),
});

export const {useGetHotelGalleryQuery, useGetBestHotelsQuery} = publicApi;
export default publicApi;
