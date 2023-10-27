import axios from "./axiosInstance";

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

export const login = async (credentials: {email: string; password: string}) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
