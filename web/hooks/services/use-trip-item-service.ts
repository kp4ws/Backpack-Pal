import { useCrudService } from "./use-crud-service";
import { TripItem, TripItemCreate, TripItemUpdate } from "@/types";

export const useTripItemService = () => {
  return useCrudService<TripItem, TripItemCreate, TripItemUpdate>(
    "/trip_items",
  );
};
