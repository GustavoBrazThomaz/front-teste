import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const multiSelectChevronStyle = style({
  marginBottom: "0.1rem",
});

export const multiSelectTriggerStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.colors.primaryNormal}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  padding: "1rem 2rem",
  borderRadius: "1rem",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.defaultHover,
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

export const multiSelectOptionsListStyle = style({
  height: "100%",
  padding: "0.5rem",
  background: theme.colors.contrastedForeground,
  color: "white",
  display: "flex",
  flexDirection: "column",
  fontSize: "1.5rem",
  borderRadius: "0.5rem",
  zIndex: "2",
  border: `1px solid ${theme.colors.primaryNormal}`,
  marginTop: "0.5rem",
});

export const multiSelectIndicatorStyle = style({
  padding: "0.3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.colors.primaryNormal}`,
  borderRadius: "0.5rem",
});

export const checkIconStyle = style({});

export const multiSelectOptionStyle = style({
  padding: "1rem",
  color: "white",
  cursor: "pointer",
  borderRadius: "1rem",
  display: "flex",
  gap: "1.5rem",
  flexDirection: "row",
  alignItems: "center",

  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.defaultHover,
    },
    "&:disabled": {
      color: theme.colors.disabledForeground,
      cursor: "not-allowed",
    },
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
    },

    "&[data-state='unchecked']": {
      [`& .${checkIconStyle}`]: {
        opacity: 0,
        transition: "opacity 150ms ease-in-out",
      },
    },
  },
});
