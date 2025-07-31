import { FC } from "react";
import { TableRootProps } from "./types";
import { tableRootStyle } from "./style/table-root.css";
import classNames from "classnames";

export const TableRoot: FC<TableRootProps> = (props) => {
  const { className, children, ...rest } = props;
  const classes = classNames(tableRootStyle, className);

  return (
    <table className={classes} {...rest}>
      {children}
    </table>
  );
};
