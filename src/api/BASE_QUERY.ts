import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {axios} from ".";

const BASE_QUERY = fetchBaseQuery({
  baseUrl: axios.defaults.baseURL,
  prepareHeaders: (headers) => {
    if (localStorage.getItem("token")) {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    }
    return headers;
  },
});

export default BASE_QUERY;
