import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const cardTitleStyle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "2rem",
  color: theme.colors.primaryForeground,
});

export const cardTitleLargeStyle = style({
  gap: "1.2rem",
  fontSize: "3.2rem",
});

export const cardTitleMediumStyle = style({
  gap: "1rem",
  fontSize: "2.4rem",
});

export const cardTitleSmallStyle = style({
  gap: "0.8rem",
  fontSize: "1.8rem",
});
