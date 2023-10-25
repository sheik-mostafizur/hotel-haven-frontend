import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, googleProvider} from "../config/firebase.config";

export const continueToGoogle = createAsyncThunk(
  "auth/continueToGoogle",
  async (_, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true)); // Set loading state
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      dispatch(setLoading(false)); // Clear loading state
      return JSON.parse(JSON.stringify(user));
    } catch (error) {
      dispatch(setLoading(false)); // Clear loading state
      return rejectWithValue(error.message); // Pass error message
    }
  }
);

export const logoutGoogle = createAsyncThunk(
  "auth/logout",
  async (_, {rejectWithValue, dispatch}) => {
    try {
      dispatch(setLoading(true)); // Set loading state
      await signOut(auth);
      dispatch(setLoading(false)); // Clear loading state
    } catch (error) {
      dispatch(setLoading(false)); // Clear loading state
      return rejectWithValue(error.message); // Pass error message
    }
  }
);
export const initAuth = createAsyncThunk(
  "auth/initAuth",
  async (_, {dispatch}) => {
    try {
      auth.onAuthStateChanged((user) => {
        const parsedUser = JSON.parse(JSON.stringify(user));

        if (user) {
          parsedUser.name = parsedUser?.displayName;
          // User is signed in
          dispatch(login({user: parsedUser, token: user.uid}));
        } else {
          // User is signed out
          dispatch(logoutGoogle())
            .unwrap()
            .then(() => {
              // Handle successful logout
            })
            .catch((error) => {
              // Handle logout error
            });
          dispatch(logout());
        }
      });
    } catch (error) {
      // Handle initialization error
    }
  }
);

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isLoading: false, // Add loading indicator
  error: null, // Add error state
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(continueToGoogle.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutGoogle.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(initAuth.fulfilled, (state) => {
        // Initialization completed
      });
  },
});

export const {login, logout, setLoading, setError} = userSlice.actions;

export default userSlice.reducer;
