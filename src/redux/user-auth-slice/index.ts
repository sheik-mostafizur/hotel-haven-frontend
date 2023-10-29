import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axios} from "../../api";
import {AxiosError} from "axios";

export const userAuthLogin = createAsyncThunk<
  any,
  {email: string; password: string},
  {rejectValue: AxiosError}
>("user-auth-login", async ({email, password}, {rejectWithValue}) => {
  try {
    const response = await axios.post("/auth/login", {email, password});
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err);
    } else {
      throw err;
    }
  }
});

export const userAuthRegister = createAsyncThunk<
  any,
  {
    registerData: {
      name: string;
      email: string;
      photoURL: string;
      phone: string;
      age: number;
      gender: string;
      password: string;
    };
  }
>("user-auth-register", async (registerData, {rejectWithValue}) => {
  try {
    const response = await axios.post("/auth/register", registerData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    } else {
      throw error;
    }
  }
});

// Define a function to get user data from local storage
const getUserDataFromLocalStorage = () => {
  const userString = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (userString) {
    const user = JSON.parse(userString);
    return {user, token};
  }
  return {user: null, token: ""};
};

const initialState = {
  ...getUserDataFromLocalStorage(), // Initialize with data from local storage
  isLoading: false,
  message: "",
  isAuthenticated: false,
};
const userAuthSlice = createSlice({
  name: "user-auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        user: null,
        token: "",
        isLoading: false,
        message: "",
        isAuthenticated: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuthRegister.pending, (state) => {
      // Handle pending state for user registration if needed
      state.isLoading = true;
      state.isAuthenticated = false;
    });

    builder.addCase(userAuthRegister.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.isAuthenticated = true;
      state.isLoading = false;
    });

    builder.addCase(userAuthRegister.rejected, (state, action) => {
      // Handle user registration failure
      state.isLoading = false;
      state.isAuthenticated = false;

      const error = action.payload as AxiosError<any>;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        state.message = error.response.data.message;
      } else {
        state.message = "An error occurred during registration.";
      }
    });
    // login
    builder.addCase(userAuthLogin.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(userAuthLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;

      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    });

    builder.addCase(userAuthLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;

      const error = action.payload as AxiosError<any>;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        state.message = error.response.data.message;
      } else {
        state.message = "An error occurred during authentication.";
      }
    });
  },
});

export default userAuthSlice.reducer;
