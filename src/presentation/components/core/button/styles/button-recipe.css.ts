import { recipe } from "@vanilla-extract/recipes";
import {
  buttonStyle,
  buttonDefaultStyle,
  buttonDangerStyle,
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from "./button.css";

export const buttonRecipe = recipe({
  base: buttonStyle,
  variants: {
    variant: {
      default: buttonDefaultStyle,
      danger: buttonDangerStyle,
      primary: buttonPrimaryStyle,
      secondary: buttonSecondaryStyle,
    },
  },
  defaultVariants: {
    variant: "default"
  },
});
