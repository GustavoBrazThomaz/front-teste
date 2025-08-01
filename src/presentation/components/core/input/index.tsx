import { forwardRef } from "react";
import { InputProps } from "./types";
import classNames from "classnames";
import { inputRecipe } from "./styles/input-recipe.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, fullWidth, ...rest }, ref) => {
    const classes = classNames(inputRecipe({ fullWidth }), className);

    return <input ref={ref} className={classes} {...rest} />;
  }
);

Input.displayName = "Input";
