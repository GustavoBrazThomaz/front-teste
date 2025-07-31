import { FC } from "react";
import { PaginationNextProps } from "./types";
import { ChevronRightIcon } from "@components/icons/chevron-right";
import { paginationNextStyle } from "./styles/pagination-next.css";
import classNames from "classnames";

export const PaginationNext: FC<PaginationNextProps> = (props) => {
  const { nextPage, disableNextPage, className, ...rest } = props;
  const classes = classNames(paginationNextStyle, className);

  return (
    <button
      className={classes}
      onClick={nextPage}
      disabled={disableNextPage}
      {...rest}
    >
      <ChevronRightIcon customSize="2rem" />
    </button>
  );
};
