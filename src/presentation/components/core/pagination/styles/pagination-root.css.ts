import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const paginationRootStyle = style({
  width: "100%",
  background: theme.colors.primarySurface,
  display: "flex",
  justifyContent: "flex-end",
  gap: "2rem",
  padding: "2rem",
  alignItems: "center",
});
