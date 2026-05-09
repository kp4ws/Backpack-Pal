import { useApi } from "./use-api";

export const useCrudService = <T, TCreate, TUpdate = Partial<TCreate>>(basepath: string) => {
  const api = useApi();

  return {
    fetchAll: (): Promise<T[]> => api(basepath),
    getOne: (id: string): Promise<T> => api(`${basepath}/${id}`),
    create: (data: TCreate): Promise<T> =>
      api(basepath, {
        method: "POST",
        body: JSON.stringify(data),
      }),
    update: (id: string, data: TUpdate): Promise<T> =>
      api(`${basepath}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    remove: (id: string): Promise<void> =>
      api(`${basepath}/${id}`, { method: "DELETE" }),
  };
};
