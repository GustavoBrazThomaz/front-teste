import { ORDER } from "@domain/enums/order-enum";

export type getCentralsParams = {
  page: number;
  limit: number;
  search?: string;
  searchType?: "name" | "model";
  sortBy?: string;
  order?: ORDER;
};
