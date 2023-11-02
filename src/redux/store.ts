import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice/adminSlice";
import themeSlice from "./themeSlice";

// import rtkQuery api
import {bestHotelsApi, hotelGalleryApi} from "../api/rtk-query";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    theme: themeSlice,
    // api path initialize
    [bestHotelsApi.reducerPath]: bestHotelsApi.reducer,
    [hotelGalleryApi.reducerPath]: hotelGalleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bestHotelsApi.middleware,
      hotelGalleryApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
