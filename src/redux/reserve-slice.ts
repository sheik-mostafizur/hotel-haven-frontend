import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface InitialStateType {
  email: string;
  phoneNumber: string;
  roomId: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  adult: number;
  children: number;
}

const initialState: InitialStateType[] = [];

const reserveSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {
    setReserve: (state, action: PayloadAction<InitialStateType>) => {
      state.push(action.payload);
    },
  },
});

export const {setReserve} = reserveSlice.actions;

export default reserveSlice.reducer;
