import { RecipeVariants } from "@vanilla-extract/recipes";
import { HTMLAttributes } from "react";
import { cardTitleRecipe } from "./style/card-title-recipe.css";

export type CardTitleRootVariants = RecipeVariants<typeof cardTitleRecipe>;

export type CardRootProps = HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = HTMLAttributes<HTMLParagraphElement> &
  CardTitleRootVariants;

export type CardContentProps = HTMLAttributes<HTMLDivElement>;
export type CardActionsProps = HTMLAttributes<HTMLDivElement>;
