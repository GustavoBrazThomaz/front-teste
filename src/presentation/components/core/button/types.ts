import { RecipeVariants } from "@vanilla-extract/recipes";
import { HTMLAttributes } from "react";
import { buttonRecipe } from "./styles/button-recipe.css";

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonVariants;
