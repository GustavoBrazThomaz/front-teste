import { FC } from "react";
import { TableBodyProps } from "./types";
import { tableBodyStyle } from "./style/table-body.css";

export const TableBody: FC<TableBodyProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <tbody className={tableBodyStyle} {...rest}>
      {children}
    </tbody>
  );
};
