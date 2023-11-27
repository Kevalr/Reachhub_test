import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getTop50players,
  getPlayerRatingByUsername,
} from "../services/lichessTask";

export const useGetTop50PlayersList = () =>
  useQuery(["top50Players"], getTop50players);

export const useGetPlayerRatingsByUsername = () =>
  useMutation(getPlayerRatingByUsername);
