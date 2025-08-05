import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPage = style({
  height: "100%",
  backgroundColor: theme.colors.background,
  padding: "4rem",
});

export const titleWithSubTitleStyle = style({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.5rem",
  marginBottom: "2rem",
});

export const subTitleStyle = style({
  fontSize: "80%",
  color: theme.colors.neutral,
  width: "100%",
});

export const topCardContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  width: "100%",
  gap: "1.5rem",
  fontSize: "2rem",
});

export const topCardTitle = style({
  color: theme.colors.secondaryForeground,
  fontSize: "2rem !important",
});
export const topCardText = style({
  color: theme.colors.primaryForeground,
  fontSize: "4rem",
  fontWeight: "bold",
});

export const topCardDescription = style({
  color: theme.colors.neutral,
});

export const bottomCardsContainer = style({
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  gap: "1.5rem",
  fontSize: "2rem",
});

export const statusGreen = style({
  backgroundColor: theme.colors.success,
  width: "1rem",
  height: "1rem",
  borderRadius: "100%",
});

export const statusIndigo = style({
  backgroundColor: theme.colors.info,
  width: "1rem",
  height: "1rem",
  borderRadius: "100%",
});

export const statusRed = style({
  backgroundColor: theme.colors.error,
  width: "1rem",
  height: "1rem",
  borderRadius: "100%",
});

export const statusContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  marginTop: "2rem",
});

export const statusText = style({
  color: theme.colors.primaryForeground,
  marginBottom: "0.5rem",
});

export const statusHourText = style({
  color: theme.colors.secondaryForeground,
});

export const infoTextContainer = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});

export const infoText = style({
  color: theme.colors.primaryForeground,
  marginBottom: "0.5rem",
});

export const infoTextValueSuccess = style({
  color: theme.colors.success,
});
