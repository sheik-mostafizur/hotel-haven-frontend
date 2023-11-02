import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {axios} from "..";

const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: axios.defaults.baseURL}),
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
