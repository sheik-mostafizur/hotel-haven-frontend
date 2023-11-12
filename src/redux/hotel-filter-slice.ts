import {createSlice} from "@reduxjs/toolkit";

const hotelFilterSlice = createSlice({
  name: "hotel-filter",
  initialState: {
    location: "",
    checkIn: "",
    checkOut: "",
    adult: 0,
    child: 0,
    limit: 10,
    page: 1,
  },
  reducers: {
    setHotelFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const {setHotelFilter} = hotelFilterSlice.actions;

export default hotelFilterSlice.reducer;
