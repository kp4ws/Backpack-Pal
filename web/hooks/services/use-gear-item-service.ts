import { useCrudService } from "./use-crud-service";
import { GearItem, GearItemCreate, GearItemUpdate } from "@/types";

export const useGearItemService = () => {
  return useCrudService<GearItem, GearItemCreate, GearItemUpdate>("/gear_items");
};
