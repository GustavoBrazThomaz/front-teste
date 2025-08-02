import { style } from "@vanilla-extract/css";

export const centralFormModalStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const macInputStyle = style({
  textTransform: "uppercase",
});

export const centralFormModalBodyStyle = style({
  maxWidth: "50rem",
  width: "100%"
});
