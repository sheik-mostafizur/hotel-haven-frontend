import {createApi} from "@reduxjs/toolkit/query/react";
import BASE_QUERY from "./BASE_QUERY";

const publicApi = createApi({
  baseQuery: BASE_QUERY,
  reducerPath: "publicApi",
  tagTypes: ["locations", "gallery", "hotels", "hotelById"],
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => "/public/locations",
      providesTags: ["locations"],
    }),
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
    getHotelById: builder.query({
      query: (_id) => `/public/hotel/${_id}`,
      providesTags: ["hotelById"],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetHotelGalleryQuery,
  useGetHotelsQuery,
  useGetHotelByIdQuery,
} = publicApi;
export default publicApi;
