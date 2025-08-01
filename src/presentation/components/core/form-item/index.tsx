import { FC } from "react";
import { FormItemProps } from "./types";
import classNames from "classnames";
import * as styles from "./styles/form-item.css";

export const FormItem: FC<FormItemProps> = (props) => {
  const { children, className, label, error, ...rest } = props;
  const classes = classNames(styles.formItemStyle, className);
  return (
    <div className={classes} {...rest}>
      <p className={styles.formLabelStyle}>{label}</p>
      {children}
      <p className={styles.formErrorStyle}>{error}</p>
    </div>
  );
};
