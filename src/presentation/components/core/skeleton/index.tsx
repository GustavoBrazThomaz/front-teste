import { FC } from "react";
import { skeletonProps } from "./types";
import { skeletonStyles } from "./styles/skeleton.css";
import classNames from "classnames";

export const Skeleton: FC<skeletonProps> = (props) => {
  const { className, children, ...rest } = props;
  const classes = classNames(skeletonStyles, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
