import { ORDER } from "@domain/enums/order-enum";
import { SortingState } from "@tanstack/react-table";
import { PaginationProps } from "@ui/data-table/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useDataTableState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "0", 10);
  const currentItemsPerPage = parseInt(
    searchParams.get("items_per_page") || "10",
    10
  );

  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: currentPage,
    pageSize: currentItemsPerPage,
  });

  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  const sortingState = sortBy
    ? [
        {
          id: sortBy,
          desc: order === ORDER.DESC,
        },
      ]
    : [];

  const [sorting, setSorting] = useState<SortingState>(sortingState);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (sorting.length > 0) {
      params.set("sortBy", sorting[0].id);
      params.set("order", sorting[0].desc ? "desc" : "asc");
      router.replace(`?${params.toString()}`);
      return;
    }

    params.delete("sortBy");
    params.delete("order");
    router.replace(`?${params.toString()}`);
  }, [sorting]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (pagination.pageIndex !== currentPage) {
      params.set("page", pagination.pageIndex.toString());
    }
    if (pagination.pageSize !== currentItemsPerPage) {
      params.set("items_per_page", pagination.pageSize.toString());
    }
    router.replace(`?${params.toString()}`);
  }, [pagination, searchParams, router]);

  const onItemsPerPageChange = (items: number) => {
    setPagination((prev) => ({ ...prev, pageSize: items, pageIndex: 0 }));
  };

  const onPageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, pageIndex: page }));
  };

  return {
    sorting,
    setSorting,
    pagination,
    onItemsPerPageChange,
    onPageChange,
  };
};
