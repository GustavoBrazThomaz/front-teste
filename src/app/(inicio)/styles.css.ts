import { smallScrollbarStyle } from "./../../presentation/components/styles/utils/scrollbar.css";
import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { style } from "@vanilla-extract/css";

export const homeLayoutStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
});

export const containerPageStyles = style({
  width: "calc(100% - 42px)",
  display: "flex",
  flexDirection: "column",
  overflowX: "auto",
  ...smallScrollbarStyle,
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      width: "100%",
    },
  },
});

export const headerGroupStyles = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "2rem",
});
