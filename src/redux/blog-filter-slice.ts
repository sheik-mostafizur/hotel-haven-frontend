import {createSlice} from "@reduxjs/toolkit";

const blogFilterSlice = createSlice({
  name: "blog-filter",
  initialState: {
    descending: true,
    limit: 10,
    page: 1,
  },
  reducers: {
    setBlogFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const {setBlogFilter} = blogFilterSlice.actions;

export default blogFilterSlice.reducer;
