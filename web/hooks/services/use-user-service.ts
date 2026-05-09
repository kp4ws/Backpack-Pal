import { useCrudService } from "./use-crud-service";
import { User, UserUpdate } from "@/types";

export const useUserService = () => {
  return useCrudService<User, never, UserUpdate>("/users");
};
