import { theme } from "@components/styles/theme/theme.css";
import { highlightEffect } from "@styles/animations.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  ...highlightEffect,
  padding: "1rem 2rem",
  borderRadius: "1rem",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.defaultHover,
    },
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
