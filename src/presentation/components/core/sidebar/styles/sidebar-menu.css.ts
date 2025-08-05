import { style } from "@vanilla-extract/css";

import { accordionContentOpenedStyle } from "@components/core/accordion/styles/accordion-content.css";
import {
  highlightedSuccessStyle,
  highlightRootHighlightedStyle,
  unhighlightedStyle,
} from "@components/core/highlight/styles/highlight-root.css";
import { theme } from "@components/styles/theme/theme.css";
import { sidebarRootStyle } from "./sidebar-root.css";

export const sidebarAccordionRootStyle = style({
  gap: "0.8rem",
});

export const sidebarInicialTriggerStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.4rem",
  alignItems: "center",
});

export const sidebarAccordionTriggerItemStyle = style({});

export const sidebarMenuItemStyle = style({
  width: "100%",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.4rem",
  padding: "1.4rem 2.2rem",

});

export const sidebarMenuItemDisabledStyle = style({
  width: "100%",
  marginLeft: "1rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  padding: "1.4rem 2.2rem",
});

export const sidebarMenuItemLinkStyle = style([
  sidebarMenuItemStyle,
  {
    ":hover": {
      borderColor: theme.colors.success,
      background: `linear-gradient(100deg, ${theme.colors.highlightSuccessEntrypoint} 0%, ${theme.colors.highlightSuccessEndpoint} 100%)`,
    },
    selectors: {
      [`${sidebarRootStyle}:hover &`]: {
        fontSize: "1.6rem",
        justifyContent: "flex-start",
      },
    },
  },
]);

export const sidebarMenuItemLinkDisabledStyle = style([
  sidebarMenuItemDisabledStyle,
  {
    ":hover": {
      borderColor: "none",
      background: "none",
    },
    selectors: {
      [`${sidebarRootStyle}:hover &`]: {
        justifyContent: "flex-start",
        fontSize: "1.6rem",
        marginLeft: "-0.5rem",
      },
    },
  },
]);

export const sidebarMenuSubItemStyle = style([
  sidebarMenuItemStyle,
  {
    display: "none",
    ":hover": {
      borderColor: theme.colors.success,
      background: `linear-gradient(100deg, ${theme.colors.highlightSuccessEntrypoint} 0%, ${theme.colors.highlightSuccessEndpoint} 100%)`,
    },

    selectors: {
      [`${sidebarRootStyle}:hover &`]: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: "6rem",
        background: "red",
        paddingBottom: "1.6rem",
        paddingTop: "1.6rem",
        fontSize: "1.4rem",
      },
    },
  },
]);

export const sidebarAccordionItemStyle = style({});

export const sidebarMenuItemTriggerStyle = style([
  sidebarMenuItemStyle,
  {
    ":hover": {
      borderColor: theme.colors.success,
      background: `linear-gradient(100deg, ${theme.colors.highlightSuccessEntrypoint} 0%, ${theme.colors.highlightSuccessEndpoint} 100%)`,
    },
  },
  {
    selectors: {
      [`${sidebarRootStyle}:hover &`]: {
        justifyContent: "space-between",
      },

      [`${sidebarAccordionItemStyle}:has(${highlightRootHighlightedStyle}) &`]:
        highlightedSuccessStyle,

      [`${sidebarRootStyle}:hover ${sidebarAccordionItemStyle}:has(${accordionContentOpenedStyle}) &`]:
        unhighlightedStyle,
    },
  },
]);

export const sidebarTextStyle = style({
  display: "none",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      display: "inline-flex",
    },
  },
});

export const sidebarTriggerFlagStyle = style({
  display: "none",
  marginLeft: "auto",

  selectors: {
    [`${sidebarRootStyle}:hover &`]: {
      display: "inline-block",
    },
  },
});
