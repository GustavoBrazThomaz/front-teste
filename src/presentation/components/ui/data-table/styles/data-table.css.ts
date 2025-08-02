import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const itemsPerPageContainerStyle = style({
  display: "flex",
  fontSize: "1.8rem",
  alignItems: "center",
  gap: "1rem",
});

export const tableTopContainerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
  alignItems: "center",
});

export const titleWithSubTitleStyle = style({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.5rem",
});

export const subTitleStyle = style({
  fontSize: "80%",
  color: theme.colors.neutral,
  width: "100%",
});
