import { FC } from "react";
import { TableHeadProps } from "./types";
import { tableHeadStyle } from "./style/table-head.css";
import classNames from "classnames";

export const TableHead: FC<TableHeadProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(tableHeadStyle, className);

  return (
    <thead className={classes} {...rest}>
      {children}
    </thead>
  );
};
