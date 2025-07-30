import { style } from "@vanilla-extract/css";

import { theme } from "@components/styles/theme/theme.css";

export const sidebarRootStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: "10.8rem",
  transition: "width 0.2s ease-in-out",
  zIndex: 1,
  borderRadius: "0",
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
      display: "inline-flex",
      marginTop: "2.2rem",
      opacity: 1,
      transition: "opacity 0.5s ease-in-out",
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
      display: "none",
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
      display: "block",
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
      display: "flex",
      width: "10rem",
      height: "1.8rem",
    },
  },
});
