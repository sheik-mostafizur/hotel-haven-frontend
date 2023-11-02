import {createApi} from "@reduxjs/toolkit/query/react";
import BASE_QUERY from "./BASE_QUERY";

const api = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "hotelGallery",
  tagTypes: ["hotelGallery"],
  endpoints: (builder) => ({
    getHotelGallery: builder.query({
      query: () => "/public/gallery",
      providesTags: ["hotelGallery"],
    }),
  }),
});

export const {useGetHotelGalleryQuery} = api;
export default api;
