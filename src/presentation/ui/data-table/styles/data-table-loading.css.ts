import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { style } from "@vanilla-extract/css";

export const headerLoadingContainerStyle = style({
  display: "flex",
  gap: "1.5rem",
  flexDirection: "column",
  marginBottom: "2rem",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
});

export const headerLoadingStyle = style({
  width: "100%",
  height: "5rem",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      width: "20rem",
    },
  },
});

export const loadingTableStyle = style({
  width: "100%",
  height: "60rem",
});
