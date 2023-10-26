import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: null,
  isLoading: false,
};

export const fetchUserData = createAsyncThunk(
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

export const editUserData = createAsyncThunk(
  "admin/editUserData",
  async (_id, updatedData) => {
    try {
      const response = await axios.put(`/admin/user/${_id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteUserData = createAsyncThunk(
  "admin/deleteUserData",
  async (userId) => {
    try {
      const response = await axios.delete(`/admin/user/${userId}`);
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
