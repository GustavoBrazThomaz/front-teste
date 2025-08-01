import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const selectRootStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
});

export const selectChevronStyle = style({
  marginBottom: "0.1rem",
});

export const selectTriggerStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.colors.primaryNormal}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  padding: "1rem 2rem",
  height: "100%",
  borderRadius: "1rem",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.primarySurface,
    },
    "&:disabled": {
      borderColor: theme.colors.disabledForeground,
      backgroundColor: theme.colors.disabledBackground,
      cursor: "not-allowed",
    },
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
    },
  },
});

export const selectViewPortStyle = style({
  position: "absolute",
  top: "5rem",
  width: "100%",
  maxWidth: "130%",
  left: "50%",
  transform: "translateX(-50%) ",
  zIndex: "1",
});

export const selectOptionsListStyle = style({
  height: "100%",
  padding: "0.5rem",
  background: theme.colors.contrastedForeground,
  color: "white",
  display: "flex",
  flexDirection: "column",
  fontSize: "1.5rem",
  borderRadius: "1rem",
  zIndex: "50",
  border: `1px solid ${theme.colors.primaryNormal}`,
});

export const selectOptionStyle = style({
  padding: "0.5rem",
  backgroundColor: "transparent",
  color: "white",
  cursor: "pointer",
  borderRadius: "1rem",
  textAlign: "left",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.primaryNormal,
    },
    "&:disabled": {
      color: theme.colors.disabledForeground,
      cursor: "not-allowed",
    },
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
    },
  },
});
