import { theme } from "@components/styles/theme/theme.css";
import { highlightEffect } from "@styles/animations.css";
import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  ...highlightEffect,
  backgroundColor: "transparent",
  color: theme.colors.primaryForeground,
  padding: "1.3rem",
  borderRadius: "1rem",
  border: `1px solid ${theme.colors.primaryNormal}`,

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
      outline: "none",
      borderColor: theme.colors.foregroundSelectionBackground,
    },
    "&:invalid": {
      borderColor: theme.colors.error,
    },
  },
});

export const buttonFullWidth = style({
  width: "100%",
});
