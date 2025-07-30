import { FC } from "react";
import { InputProps } from "./types";
import classNames from "classnames";
import { inputStyle } from "./styles/input.css";

export const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(inputStyle, className);

  return <input className={classes} {...rest} />;
};
