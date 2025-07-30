import { FC } from "react";
import { InputProps } from "./types";
import classNames from "classnames";
import { inputRecipe } from "./styles/input-recipe.css";

export const Input: FC<InputProps> = (props) => {
  const { className, fullWidth, ...rest } = props;
  const classes = classNames(inputRecipe({ fullWidth }), className);

  return <input className={classes} {...rest} />;
};
