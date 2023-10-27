import {authType} from "../types";
import axios from "./axios-Instance";

type RegisterType = {
  email: string;
  password: string;
};

export const register = async (userData: RegisterType) => {
  try {
    const response = await axios.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials: authType.Login) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
