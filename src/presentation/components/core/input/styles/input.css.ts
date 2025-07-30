import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  backgroundColor: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  padding: "1.3rem",
  borderRadius: "1rem",
  border: `1px solid ${theme.colors.secondaryForeground}`,

  selectors: {
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
