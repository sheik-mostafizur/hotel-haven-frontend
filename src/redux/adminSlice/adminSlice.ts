import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  photoURL: string;
  phone: string;
  age: number;
  gender: "MALE" | "FEMALE";
  role: "ADMIN" | "MANAGER" | "CUSTOMER";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AdminState {
  users: User[];
  isLoading: boolean;
}

const initialState: AdminState = {
  users: [],
  isLoading: false,
};

export const fetchUserData = createAsyncThunk<[], void>(
  "admin/fetchUserData",
  async () => {
    try {
      const response = await axios.get("/admin/user");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

interface UpdatedUserData {
  _id: string;
  updatedData: any;
}
export const editUserData = createAsyncThunk<string, UpdatedUserData>(
  "admin/editUserData",
  async ({_id, updatedData}) => {
    try {
      const response = await axios.put(`/admin/user/${_id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
interface DeleteUserDataPayload {
  _id: string;
}

export const deleteUserData = createAsyncThunk<void, DeleteUserDataPayload>(
  "admin/deleteUserData",
  async ({_id}) => {
    try {
      const response = await axios.delete(`/admin/user/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
      })
      // for Edit user data
      .addCase(editUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUserData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editUserData.rejected, (state) => {
        state.isLoading = false;
      })
      // for delete user data
      .addCase(deleteUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default adminSlice.reducer;
