import classNames from "classnames";
import { FC } from "react";
import { cardActionsStyle } from "./style/card-actions.css";
import { CardActionsProps } from "./types";

export const CardActions: FC<CardActionsProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(cardActionsStyle, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
