import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const paginationNextStyle = style({
  padding: "1rem",
  borderRadius: "1rem",
  backgroundColor: "transparent",
  color: theme.colors.primaryForeground,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: theme.colors.disabledBackground,
    },
    "&:disabled": {
      color: theme.colors.neutral,
      cursor: "not-allowed",
    },
  },
});
