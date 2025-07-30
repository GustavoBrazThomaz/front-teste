import classNames from "classnames";
import { FC } from "react";
import { CardContentProps } from "./types";
import { cardContentStyle } from "./style/card-content.css";

export const CardContent: FC<CardContentProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(cardContentStyle, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
