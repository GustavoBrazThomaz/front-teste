import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPageStyle = style({
  height: "100%",
  backgroundColor: theme.colors.background,
  padding: "2rem",
});

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
  alignItems: "center",
});

export const tableContainerStyle = style({
  marginTop: "2rem",
  padding: "4rem !important",
});

export const actionCellStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
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
