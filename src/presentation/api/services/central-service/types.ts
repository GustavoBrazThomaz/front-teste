export type getCentralsParams = {
  page: number;
  limit: number;
  search?: string;
  searchType?: "name" | "model";
  sortBy?: string;
  order?: "asc" | "desc";
};
