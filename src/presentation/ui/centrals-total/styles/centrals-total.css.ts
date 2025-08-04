import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const centralsTotalContainer = style({
  fontSize: "2rem",
  color: theme.colors.primaryForeground,
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const centralsTotalCard = style({
  padding: "0.5rem",
  backgroundColor: theme.colors.background,
  borderRadius: "0.5rem",
});

export const centralsTotalText = style({
  display: "none",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      display: "block",
    },
  },
});

export const loadingCentralsTotalStyle = style({
  width: "20rem",
  height: "4rem",
});
