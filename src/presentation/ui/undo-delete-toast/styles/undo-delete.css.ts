import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const undoDeleteStyle = style({
  fontSize: "1.6rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const undoDeleteButton = style({
  backgroundColor: "transparent",
  cursor: "pointer",
  border: `1px solid ${theme.colors.neutral}`,
  padding: "1rem",
  borderRadius: "1rem",
  color: theme.colors.primaryForeground,
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.contrastedForeground,
    },
  },
});
