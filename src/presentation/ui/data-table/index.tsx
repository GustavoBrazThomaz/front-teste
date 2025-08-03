import { Table } from "@components/core/table";
import { DataTableProps, PaginationProps } from "./types";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { Pagination } from "@components/core/pagination";
import { PaginationNext } from "@components/core/pagination/PaginationNext";
import { useRouter, useSearchParams } from "next/navigation";
import * as constants from "./constants";
import * as styles from "./styles/data-table.css";
import { Select } from "@components/core/select/Select";
import { SelectOption } from "@components/core/select/types";
import { Title } from "@components/core/title";
import { useDataTableState } from "../../hooks/ui/use-data-table-state";

export function DataTable<T>(props: DataTableProps<T>) {
  const { data, columns, total, title, description } = props;

  const {
    sorting,
    setSorting,
    pagination,
    onPageChange,
    onItemsPerPageChange,
  } = useDataTableState();

  const table = useReactTable<T>({
    data: data,
    columns: columns,
    pageCount: Math.ceil(total / pagination.pageSize),
    state: {
      pagination,
      sorting,
    },
    manualPagination: true,
    manualSorting: true,
    enableSortingRemoval: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const nextPage = () => {
    onPageChange(pagination.pageIndex + 1);
    table.nextPage();
  };

  const previousPage = () => {
    onPageChange(Math.max(pagination.pageIndex - 1, 0));
    table.previousPage();
  };

  const itemsPerPage = (item: SelectOption) => {
    onItemsPerPageChange(Number(item.value));
  };

  return (
    <React.Fragment>
      <div className={styles.tableTopContainerStyle}>
        <Title.Root size="medium" className={styles.titleWithSubTitleStyle}>
          <Title.Text>{title}</Title.Text>
          <Title.Item className={styles.subTitleStyle}>
            {description}
          </Title.Item>
        </Title.Root>

        <div className={styles.itemsPerPageContainerStyle}>
          <p>Itens por página:</p>
          <Select
            defaultValue={pagination.pageSize.toString() ?? "10"}
            options={constants.itemsPerPage}
            onChange={(option) => itemsPerPage(option as SelectOption)}
          />
        </div>
      </div>

      <Table.Root>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Cell
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  hasSort={header.column.getCanSort()}
                  sortDirection={header.column.getIsSorted()}
                >
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
          previousPage={previousPage}
          disablePreviousPage={!table.getCanPreviousPage()}
        />
        <Pagination.Count
          pageTotal={table.getPageCount()}
          pageNumber={table.getState().pagination.pageIndex + 1}
        />
        <PaginationNext
          disableNextPage={!table.getCanNextPage()}
          nextPage={nextPage}
        />
      </Pagination.Root>
    </React.Fragment>
  );
}
