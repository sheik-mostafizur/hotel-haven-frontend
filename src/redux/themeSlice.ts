import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "base",
  reducers: {
    changeTheme: (state, action) => {
      localStorage.setItem("theme", action.payload.theme);
      return (state = action.payload.theme);
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
