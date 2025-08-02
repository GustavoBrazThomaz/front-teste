import { FC } from "react";
import { TableCellProps } from "./types";
import classNames from "classnames";
import * as styles from "./style/table-cell.css";
import { ChevronDownIcon } from "@components/icons/chevron-down";

export const TableCell: FC<TableCellProps> = (props) => {
  const { className, children, hasSort, sortDirection, ...rest } = props;
  const classes = classNames(
    hasSort ? styles.headerCellStyle : styles.tableCellStyle,
    className
  );

  return (
    <td className={classes} {...rest}>
      <div className={styles.headerCellContainerStyle}>
        {children}
        {hasSort && (
          <>
            {sortDirection === "asc" ? (
              <ChevronDownIcon
                customSize="1.6rem"
                className={styles.ascSortStyle}
              />
            ) : sortDirection === "desc" ? (
              <ChevronDownIcon customSize="1.6rem" />
            ) : null}
          </>
        )}
      </div>
    </td>
  );
};
