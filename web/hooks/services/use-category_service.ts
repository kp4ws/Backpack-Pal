import { useCrudService } from "./use-crud-service";
import { Category, CategoryCreate, CategoryUpdate } from "@/types";

export const useCategoryService = () => {
  return useCrudService<Category, CategoryCreate, CategoryUpdate>(
    "/categories",
  );
};
