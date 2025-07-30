import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "./types";
import { buttonRecipe } from "./styles/button-recipe.css";
import { CheckIcon } from "@components/icons/check";

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, variants, ...rest } = props;
  const classes = classNames(buttonRecipe({ variants }), className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
