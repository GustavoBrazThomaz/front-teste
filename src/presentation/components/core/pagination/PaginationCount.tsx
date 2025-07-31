import { FC } from "react";
import { PaginationCountProps } from "./types";
import classNames from "classnames";
import { paginationCountStyle } from "./styles/pagination-count.css";

export const PaginationCount: FC<PaginationCountProps> = (props) => {
  const { pageTotal, pageNumber, className, ...rest } = props;
  const classes = classNames(paginationCountStyle, className);

  return (
    <div className={classes} {...rest}>
      {pageNumber} de {pageTotal}
    </div>
  );
};
