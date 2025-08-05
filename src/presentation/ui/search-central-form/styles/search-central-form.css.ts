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
  width: "100%",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      minWidth: "20rem",
      width: "25rem",
    },
  },
});

export const clearFiltersButtonStyle = style({
  width: "100%",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      width: "20rem",
      minWidth: "15rem",
    },
  },
});
