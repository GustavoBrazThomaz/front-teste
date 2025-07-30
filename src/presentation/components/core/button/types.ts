import { RecipeVariants } from "@vanilla-extract/recipes";
import { ButtonHTMLAttributes } from "react";
import { buttonRecipe } from "./styles/button-recipe.css";

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;
