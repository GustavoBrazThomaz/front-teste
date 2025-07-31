import { FC } from "react";
import { TableRowProps } from "./types";
import classNames from "classnames";
import { tableRowStyle } from "./style/table-row.css";

export const TableRow: FC<TableRowProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(tableRowStyle, className);
  return (
    <tr className={classes} {...rest}>
      {children}
    </tr>
  );
};
