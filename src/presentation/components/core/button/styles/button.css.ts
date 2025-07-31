import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  padding: "1rem 2rem",
  borderRadius: "1rem",
  cursor: "pointer",
  selectors: {
    "&:focus": {
      borderColor: theme.colors.foregroundSelectionBackground,
    },
  },
});

export const buttonDefaultStyle = style({
  border: `1px solid ${theme.colors.primaryNormal}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.primarySurface,
    },
    "&:disabled": {
      borderColor: theme.colors.disabledForeground,
      backgroundColor: theme.colors.disabledBackground,
      cursor: "not-allowed",
    },
  },
});

export const buttonPrimaryStyle = style({
  border: `1px solid ${theme.colors.secondaryForeground}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.primarySurface,
    },
    "&:disabled": {
      borderColor: theme.colors.disabledForeground,
      backgroundColor: theme.colors.disabledBackground,
      cursor: "not-allowed",
    },
  },
});

export const buttonSecondaryStyle = style({
  border: `1px solid ${theme.colors.foregroundSelectionBackground}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.foregroundSelectionBackground,
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.primarySurface,
    },
    "&:disabled": {
      borderColor: theme.colors.disabledForeground,
      backgroundColor: theme.colors.disabledBackground,
      cursor: "not-allowed",
    },
  },
});

export const buttonDangerStyle = style({
  border: `1px solid ${theme.colors.error}`,
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.error,
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
      borderColor: theme.colors.alert,
    },
  },
});
