import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { tableHeadStyle } from "./table-head.css";

export const tableRowStyle = style({
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.contrastedForeground,
      color: theme.colors.primaryForeground,
    },
    [`${tableHeadStyle}:hover &`]: {
      backgroundColor: "transparent",
    },
  },
});
