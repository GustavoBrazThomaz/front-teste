import classNames from "classnames";
import { FC } from "react";
import { ModalContentProps } from "./types";
import * as styles from "./styles/modal-content.css";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

export const ModalContent: FC<ModalContentProps> = (props) => {
  const { children, className, title, description, ...rest } = props;

  const classes = classNames(styles.modalContentStyle, className);
  return (
    <div className={classes} {...rest}>
      <DialogTitle className={styles.modalTitleStyle}>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
      {children}
    </div>
  );
};
