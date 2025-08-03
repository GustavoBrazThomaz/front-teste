import { ColumnDef } from "@tanstack/react-table";
import { CentralTableType } from "./types";

export const columns: ColumnDef<CentralTableType>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => row.getValue("name"),
    enableSorting: true,
  },
  {
    accessorKey: "modelName",
    header: "Modelo",
    cell: ({ row }) => row.getValue("modelName"),
    enableSorting: true,
  },
  {
    accessorKey: "mac",
    header: "MAC",
    cell: ({ row }) => row.getValue("mac"),
    enableSorting: false,
  },
];
