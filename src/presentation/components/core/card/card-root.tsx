import classNames from "classnames";
import { FC } from "react";
import { cardRootStyle } from "./style/card-root.css";
import { CardRootProps } from "./types";

export const CardRoot: FC<CardRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(cardRootStyle, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
