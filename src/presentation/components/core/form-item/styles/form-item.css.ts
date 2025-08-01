import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const formItemStyle = style({
  width: "100%",
});

export const formLabelStyle = style({
  color: theme.colors.neutral,
  fontSize: "1.8rem",
});

export const formErrorStyle = style({
  color: theme.colors.alert,
  fontSize: "1.6rem",
});
