import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice/adminSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
