import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const tableCellStyle = style({
  backgroundColor: "transparent",
  border: `1px solid ${theme.colors.primaryNormal}`,
  padding: "1rem",
});

export const headerCellStyle = style({
  backgroundColor: "transparent",
  border: `1px solid ${theme.colors.primaryNormal}`,
  padding: "1rem",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.tableColorPrimary,
    },
  },
});

export const headerCellContainerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

export const ascSortStyle = style({
  transform: "rotate(180deg)",
});
