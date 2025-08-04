import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { style } from "@vanilla-extract/css";

export const searchContainerStyle = style({
  width: "100%",
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",

  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      flexDirection: "row",
    },
  },
});

export const multiSelectStyle = style({
  width: "inherit",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      width: "100%",
    },
  },
});
