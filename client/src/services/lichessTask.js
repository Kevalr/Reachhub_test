import axiosClient from "../config/axios-client";

const getTop50players = () => axiosClient.get("/api/topplayerslist");

const getPlayerRatingByUsername = (payload) =>
  axiosClient.post(`/api/playerratingshistory`, payload);

export { getTop50players, getPlayerRatingByUsername };
