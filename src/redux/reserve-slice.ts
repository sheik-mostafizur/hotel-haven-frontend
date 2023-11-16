import {createSlice} from "@reduxjs/toolkit";

/*
[
  {
    email: "",
    phoneNumber: "",
    roomId: "",
    hotelId:"",
    checkIn: "",
    checkOut: "",
    adult: 1,
    children: 0,
  },
]
*/

const reserveSlice = createSlice({
  name: "reserve",
  initialState: [],
  reducers: {
    setReserve: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {setReserve} = reserveSlice.actions;

export default reserveSlice.reducer;
