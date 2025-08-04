import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const tableTopContainerStyle = style({
  display: "flex",
  marginBottom: "2rem",
  flexDirection: "column",
  gap: "1.5rem",

  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
  },
});

export const itemsPerPageContainerStyle = style({
  display: "flex",
  fontSize: "1.8rem",
  alignItems: "center",
  gap: "1rem",
  justifyContent: "flex-end",

  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      justifyContent: "flex-start",
    },
  },
});

export const titleWithSubTitleStyle = style({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.5rem",
});

export const subTitleStyle = style({
  fontSize: "80%",
  color: theme.colors.neutral,
  width: "100%",
});
