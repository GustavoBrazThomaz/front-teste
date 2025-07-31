import { FC } from "react";
import { PaginationPreviousProps } from "./types";
import { ChevronLeftIcon } from "@components/icons/chevron-left";
import classNames from "classnames";
import { paginationPreviousStyle } from "./styles/pagination-previous.css";

export const PaginationPrevious: FC<PaginationPreviousProps> = (props) => {
  const { previousPage, disablePreviousPage, className, ...rest } = props;
  const classes = classNames(paginationPreviousStyle, className);

  return (
    <button
      className={classes}
      onClick={previousPage}
      disabled={disablePreviousPage}
      {...rest}
    >
      <ChevronLeftIcon customSize="2rem" />
    </button>
  );
};
