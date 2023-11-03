import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice/adminSlice";
import themeSlice from "./themeSlice";

// import rtkQuery api
import {publicApi} from "../api";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    theme: themeSlice,
    // api path initialize
    [publicApi.reducerPath]: publicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
