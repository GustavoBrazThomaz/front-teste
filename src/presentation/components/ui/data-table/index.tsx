import { Table } from "@components/core/table";
import { DataTableProps } from "./types";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Pagination } from "@components/core/pagination";
import { PaginationNext } from "@components/core/pagination/PaginationNext";

export function DataTable<T>(props: DataTableProps<T>) {
  const { data, columns } = props;

  const table = useReactTable<T>({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <React.Fragment>
      <Table.Root>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Cell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination.Root>
        <Pagination.Previous
          previousPage={table.previousPage}
          disablePreviousPage={!table.getCanPreviousPage()}
        />
        <Pagination.Count
          pageTotal={table.getPageCount()}
          pageNumber={table.getState().pagination.pageIndex + 1}
        />
        <PaginationNext
          disableNextPage={!table.getCanNextPage()}
          nextPage={table.nextPage}
        />
      </Pagination.Root>
    </React.Fragment>
  );
}
