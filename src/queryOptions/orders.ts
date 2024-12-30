import { axiosRemoteService } from "@src/servicesApiEntities/axiosRemoteService";
import { queryOptions } from "@tanstack/react-query";

export const allOrdersQueryOptions = queryOptions({
  queryKey: ["orders", "all"],
  queryFn: () =>
    axiosRemoteService.get<unknown[]>("/orders").then((res) => res.data),
});
