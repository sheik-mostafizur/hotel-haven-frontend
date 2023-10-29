import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import adminSlice from "./adminSlice/adminSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    theme: themeSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
