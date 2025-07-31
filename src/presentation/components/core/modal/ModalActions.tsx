import classNames from "classnames";
import { FC } from "react";
import { ModalActionsProps } from "./types";
import { modalActionsStyle } from "./styles/modal-actions.css";

export const ModalActions: FC<ModalActionsProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(modalActionsStyle, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
