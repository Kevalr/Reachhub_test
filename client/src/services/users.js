import axiosClient from "../config/axios-client";

const createUser = (payload) => {
  return axiosClient.post("/api/auth/signup", payload);
};

const login = (payload) => axiosClient.post("/api/auth/signin", payload);

export { createUser, login };
