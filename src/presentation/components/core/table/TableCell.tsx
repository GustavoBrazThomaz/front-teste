import { FC } from "react";
import { TableCellProps } from "./types";
import classNames from "classnames";
import { tableCellStyle } from "./style/table-cell.css";

export const TableCell: FC<TableCellProps> = (props) => {
  const { className, children, ...rest } = props;
  const classes = classNames(tableCellStyle, className);

  return (
    <td className={classes} {...rest}>
      {children}
    </td>
  );
};
