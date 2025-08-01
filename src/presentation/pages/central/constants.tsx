import { SelectOption } from "@components/core/select/types";
import { ColumnDef } from "@tanstack/react-table";
import { CentralTableType } from "../../types/central-types";

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
  },
];

export const options: SelectOption[] = [
  {
    label: "Ascendente",
    value: "asc",
  },
  {
    label: "Decrescente",
    value: "desc",
    disabled: true,
  },
  {
    label: "A-Z",
    value: "a-z",
  },
];

export const itemsPerPage: SelectOption[] = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "50",
    value: "50",
  },
];
