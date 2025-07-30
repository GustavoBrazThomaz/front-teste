import { style } from "@vanilla-extract/css";

import { theme } from "../../../styles/theme/theme.css";

export const headerRootStyle = style({
  width: "100%",
  height: "6rem",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.colors.secondarySurface,
  borderBottom: `3px solid ${theme.colors.primarySurface}`,
  borderLeft: `3px solid ${theme.colors.primarySurface}`,
});
