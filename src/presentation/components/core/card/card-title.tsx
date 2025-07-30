import classNames from "classnames";
import { FC } from "react";
import { CardTitleProps } from "./types";
import { cardTitleRecipe } from "./style/card-title-recipe.css";

export const CardTitle: FC<CardTitleProps> = (props) => {
  const { children, className, size, ...rest } = props;
  const classes = classNames(cardTitleRecipe({ size }), className);

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};
