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

export const searchContainerStyle = style({
  display: "flex",
  gap: "1.5rem",
  flexDirection: "row",
});

export const tableContainerStyle = style({
  marginTop: "2rem",
  padding: "4rem !important",
});

export const tableTopContainerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
  alignItems: "center",
});

export const itemsPerPageContainerStyle = style({
  display: "flex",
  fontSize: "1.8rem",
  alignItems: "center",
  gap: "1rem",
});

export const actionCellStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
});
