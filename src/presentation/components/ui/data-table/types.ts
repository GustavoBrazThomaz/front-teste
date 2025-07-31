import { type ColumnDef } from "@tanstack/react-table";

export type DataTableProps<T> = { data: T[]; columns: Array<ColumnDef<T>> };
