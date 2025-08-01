import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const totalCentralStyle = style({
  fontSize: "2rem",
  color: theme.colors.primaryForeground,
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});
