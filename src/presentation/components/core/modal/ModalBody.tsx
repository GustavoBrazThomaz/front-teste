import {
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import classNames from "classnames";
import * as styles from "./styles/modal-body.css";
import { ModalBodyProps } from "./types";
import { FC } from "react";

export const ModalBody: FC<ModalBodyProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(styles.modalBodyStyle, className);

  return (
    <DialogPortal>
      <DialogOverlay className={styles.modalOverlayStyle} />

      <DialogContent className={classes}>{children}</DialogContent>
    </DialogPortal>
  );
};
