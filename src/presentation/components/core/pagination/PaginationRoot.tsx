import { FC } from "react";
import { PaginationRootProps } from "./types";
import classNames from "classnames";
import { paginationRootStyle } from "./styles/pagination-root.css";

export const PaginationRoot: FC<PaginationRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(paginationRootStyle, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
