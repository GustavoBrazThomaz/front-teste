import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { tableRowStyle } from "./table-row.css";

export const tableHeadStyle = style({
  backgroundColor: theme.colors.tableHeadBackground,
  width: "100%",
  color: theme.colors.primaryForeground,
});
