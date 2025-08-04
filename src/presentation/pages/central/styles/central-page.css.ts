import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPageStyle = style({
  height: "100%",
  backgroundColor: theme.colors.background,
  padding: "2rem",
  width: "100%",
  overflowX: "auto",
});

export const headerStyle = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
  gap: "2rem",
  width: "100%",

  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
});

export const headerButtonContainerStyle = style({
  display: "flex",
  gap: "2rem",
});

export const headerButtonStyle = style({
  width: "100%",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      width: "inherit",
    },
  },
});

export const tableContainerStyle = style({
  marginTop: "2rem",
  padding: "3rem 2rem",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4rem",
    },
  },
});

export const actionCellStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
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
