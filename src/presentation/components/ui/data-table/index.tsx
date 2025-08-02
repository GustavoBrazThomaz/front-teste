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

export function DataTable<T>(props: DataTableProps<T>) {
  const { data, columns, total, title, description } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentItemsPerPage = parseInt(
    searchParams.get("items_per_page") || "10",
    10
  );

  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: currentPage,
    pageSize: currentItemsPerPage,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<T>({
    data: data,
    columns: columns,
    pageCount: Math.ceil(total / pagination.pageSize),
    state: {
      pagination,
      sorting,
    },
    manualPagination: true,
    // manualSorting: true,
    enableSortingRemoval: true,
    onSortingChange: teste,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  function teste(e) {
    setSorting(e)
    console.log(sorting)
  }

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: currentPage,
    }));
  }, [currentPage]);

  const setSearchParams = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.push(`?${params}`);
  };

  const nextPage = () => {
    const page = (pagination.pageIndex + 1).toString();
    table.nextPage();
    setSearchParams("page", page);
  };

  const previousPage = () => {
    const page = Math.max(pagination.pageIndex - 1, 0).toString();
    table.previousPage();
    setSearchParams("page", page);
  };

  const itemsPerPage = (items: SelectOption) => {
    setSearchParams("items_per_page", items.value);
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
            defaultValue={currentItemsPerPage.toString() ?? "10"}
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
                  sortDirection={header.column.getNextSortingOrder()}
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
