import { FC } from "react";
import { emptyProps } from "./types";
import classNames from "classnames";
import * as styles from "./styles/empty.css";
import { FileLinesIcon } from "@components/icons/file-lines";

export const Empty: FC<emptyProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(styles.emptyContainerStyle, className);

  return (
    <div className={classes} {...rest}>
      <FileLinesIcon customSize="6rem" />
      <p className={styles.emptyTextStyle}>Sem dados</p>
    </div>
  );
};
