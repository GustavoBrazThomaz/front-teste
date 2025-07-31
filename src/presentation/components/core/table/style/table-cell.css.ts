import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const tableCellStyle = style({
  backgroundColor: "transparent",
  border: `1px solid ${theme.colors.primaryNormal}`,
  padding: "1rem",
});
