import { type ColumnDef } from "@tanstack/react-table";

export type DataTableProps<T> = {
  data: T[];
  columns: Array<ColumnDef<T>>;
  total: number;
  title?: string
  description?: string
};
export type PaginationProps = { pageIndex: number; pageSize: number };
