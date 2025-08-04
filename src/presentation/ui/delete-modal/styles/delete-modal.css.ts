import { BREAKPOINTS } from "@components/styles/theme/breakpoints";
import { style } from "@vanilla-extract/css";

export const deleteModalBodyStyle = style({
  maxWidth: "80vw",
  width: "100%",
  "@media": {
    [`screen and ${BREAKPOINTS.sm}`]: {
      maxWidth: "50rem",
    },
  },
});

export const deleteModalContentStyle = style({
  lineClamp: "3rem",
});
