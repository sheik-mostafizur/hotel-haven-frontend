import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice/adminSlice";
import themeSlice from "./themeSlice";
import userAuthSlice from "./user-auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userAuth: userAuthSlice,
    admin: adminSlice,
    theme: themeSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
