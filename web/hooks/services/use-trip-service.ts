import { useCrudService } from "./use-crud-service";
import { Trip, TripCreate, TripUpdate } from "@/types";

export const useTripService = () => {
  return useCrudService<Trip, TripCreate, TripUpdate>("/trips");
};
