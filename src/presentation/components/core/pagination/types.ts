import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type PaginationRootProps = HTMLAttributes<HTMLDivElement>;

export type PaginationNextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  nextPage: () => void;
  disableNextPage: boolean;
};

export type PaginationPreviousProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  previousPage: () => void;
  disablePreviousPage: boolean;
};

export type PaginationCountProps = HTMLAttributes<HTMLDivElement> & {
  pageTotal: number;
  pageNumber: number;
};

/*
Criar compose desse componente
Pagination.Root
Pagination.Next
Pagination.Previous
Pagination.Count
*/
