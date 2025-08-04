import { type ColumnDef } from "@tanstack/react-table";

export type DataTableProps<T> = {
  data: T[] | undefined;
  columns: Array<ColumnDef<T>>;
  total: number | undefined;
  title?: string;
  description?: string;
  isLoading: boolean;
};

export type PaginationProps = { pageIndex: number; pageSize: number };
