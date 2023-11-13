import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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

interface AuthState {
  token: string | null;
  user:
    | User
    | {
        _id: "";
        name: "";
        email: "";
        photoURL: "";
        phone: "";
        age: 0;
        gender: "MALE";
        role: "ADMIN";
        createdAt: "";
        updatedAt: "";
        __v: 0;
      };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: {
    _id: "",
    name: "",
    email: "",
    photoURL: "",
    phone: "",
    age: 0,
    gender: "MALE",
    role: "ADMIN",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        user: User;
      }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = {
        _id: "",
        name: "",
        email: "",
        photoURL: "",
        phone: "",
        age: 0,
        gender: "MALE",
        role: "ADMIN",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      };
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.replace("/");
    },
    setUser: (state, action: PayloadAction<{user: User}>) => {
      state.user = action.payload.user;

      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }

      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {login, logout, setUser, setLoading, setError} = userSlice.actions;

export default userSlice.reducer;
