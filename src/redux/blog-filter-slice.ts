import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define the type for your blog filter state
interface BlogFilterState {
  descending: boolean;
  limit: number;
  page: number;
}

// Define the initial state with specified types
const initialState: BlogFilterState = {
  descending: true,
  limit: 10,
  page: 1,
};

// Create the blog filter slice
const blogFilterSlice = createSlice({
  name: "blog-filter",
  initialState,
  reducers: {
    setBlogFilter: (state, action: PayloadAction<Partial<BlogFilterState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {setBlogFilter} = blogFilterSlice.actions;
export default blogFilterSlice.reducer;
