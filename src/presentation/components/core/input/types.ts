import { RecipeVariants } from "@vanilla-extract/recipes";
import { InputHTMLAttributes } from "react";
import { inputRecipe } from "./styles/input-recipe.css";

export type InputVariants = RecipeVariants<typeof inputRecipe>;
export type InputProps = InputHTMLAttributes<HTMLInputElement> & InputVariants;
