import classNames from "classnames";
import { FC } from "react";
import { ModalContentProps } from "./types";
import { modalContentStyle } from "./styles/modal-content.css";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

export const ModalContent: FC<ModalContentProps> = (props) => {
  const { children, className, title, description, ...rest } = props;
  const classes = classNames(modalContentStyle, className);
  return (
    <div className={classes} {...rest}>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
      {children}
    </div>
  );
};
