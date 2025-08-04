import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./types";
import { buttonRecipe } from "./styles/button-recipe.css";

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, variant, ...rest } = props;
  const classes = classNames(buttonRecipe({ variant }), className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
