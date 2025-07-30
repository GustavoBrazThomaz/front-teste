import { style } from "@vanilla-extract/css";

export const homeLayoutStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
});

export const containerPageStyles = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const headerGroupStyles = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "2rem",
});

export const headerRightTextStyles = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});
