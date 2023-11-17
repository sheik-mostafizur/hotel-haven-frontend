import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define the type for your hotel filter state
interface HotelFilterState {
  location: string;
  checkIn: string;
  checkOut: string;
  adult: number;
  children: number;
  limit: number;
  page: number;
}

// Define the initial state with the specified types
const initialState: HotelFilterState = {
  location: "",
  checkIn: "",
  checkOut: "",
  adult: 1,
  children: 0,
  limit: 10,
  page: 1,
};

// Create the hotel filter slice
const hotelFilterSlice = createSlice({
  name: "hotel-filter",
  initialState,
  reducers: {
    setHotelFilter: (
      state,
      action: PayloadAction<Partial<HotelFilterState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {setHotelFilter} = hotelFilterSlice.actions;
export default hotelFilterSlice.reducer;
