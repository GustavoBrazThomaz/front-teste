import { FC } from "react";
import { TableBodyProps } from "./types";

export const TableBody: FC<TableBodyProps> = (props) => {
  const { children, ...rest } = props;
  return <tbody {...rest}>{children}</tbody>;
};
