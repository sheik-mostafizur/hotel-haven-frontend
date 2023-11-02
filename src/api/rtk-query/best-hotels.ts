import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {axios} from "..";

const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: axios.defaults.baseURL}),
  reducerPath: "bestHotels",
  tagTypes: ["bestHotels"],
  endpoints: (builder) => ({
    getBestHotels: builder.query({
      query: () => "/public/hotel",
      providesTags: ["bestHotels"],
    }),
  }),
});

export const {useGetBestHotelsQuery} = api;
export default api;
