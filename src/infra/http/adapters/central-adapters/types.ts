import { ORDER } from "@domain/enums/order-enum";

export type getCentralsParams = {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  order?: ORDER;
  models?: string[];
};
