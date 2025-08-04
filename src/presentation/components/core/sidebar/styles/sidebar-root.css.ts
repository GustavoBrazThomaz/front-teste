import { style } from "@vanilla-extract/css";

import { theme } from "@components/styles/theme/theme.css";
import { BREAKPOINTS } from "@components/styles/theme/breakpoints";

export const sidebarRootStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: "10.8rem",
  transition: "width 0.2s ease-in-out",
  borderRadius: "0 !important",
  zIndex: 1,
  ":hover": {
    width: "32rem",
  },
});

export const sideBarHeaderStyle = style({
  display: "flex",
  flexDirection: "column",
  fontWeight: "lighter",
  height: "10rem",
  alignItems: "center",
  marginBottom: "1rem",
  justifyContent: "center",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      alignItems: "center",
    },
  },
});

export const sideBarDefenseLogoStyle = style({
  width: 0,
  height: 0,
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      width: "18rem",
      height: "5rem",
      display: "none",
      marginTop: "2.2rem",
      opacity: 1,
      transition: "opacity 0.5s ease-in-out",
      "@media": {
        [`screen and ${BREAKPOINTS.sm}`]: {
          display: "inline-flex",
        },
      },
    },
  },
});

export const sideBarDefenseLogoSmallStyle = style({
  width: "6rem",
  height: "3.5rem",
  marginTop: "1rem",
  display: "flex",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      display: "flex",
      "@media": {
        [`screen and ${BREAKPOINTS.sm}`]: {
          display: "none",
        },
      },
    },
  },
});

export const sideBarTitleHeaderStyle = style({
  fontSize: "2rem",
  color: theme.colors.primaryForeground,
  display: "none",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      display: "none",
      "@media": {
        [`screen and ${BREAKPOINTS.sm}`]: {
          display: "block",
        },
      },
    },
  },
});

export const sideBarFooterStyle = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "auto",
  marginBottom: "2.4rem",
});

export const sideBarIntelbrasLogoStyle = style({
  display: "none",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      display: "none",
      width: "10rem",
      height: "1.8rem",

      "@media": {
        [`screen and ${BREAKPOINTS.sm}`]: {
          display: "flex",
        },
      },
    },
  },
});
