import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeSlice from "./themeSlice";
import hotelFilterSlice from "./hotel-filter-slice";

// import rtkQuery api
import {publicApi, adminApi, privateApi} from "../api";

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
    hotelFilter: hotelFilterSlice,
    // api path initialize
    [publicApi.reducerPath]: publicApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      publicApi.middleware,
      privateApi.middleware,
      adminApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
