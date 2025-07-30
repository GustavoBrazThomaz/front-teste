import { recipe } from "@vanilla-extract/recipes";

import * as styles from "./card-title.css";

export const cardTitleRecipe = recipe({
  base: styles.cardTitleStyle,
  variants: {
    size: {
      small: styles.cardTitleSmallStyle,
      medium: styles.cardTitleMediumStyle,
      large: styles.cardTitleLargeStyle,
    },
  },
  defaultVariants: {
    size: "large",
  },
});
