import { recipe } from "@vanilla-extract/recipes";
import { buttonFullWidth, inputStyle } from "./input.css";

export const inputRecipe = recipe({
  base: inputStyle,
  variants: {
    fullWidth: {
      true: buttonFullWidth,
      false: {},
    },
  },
});
