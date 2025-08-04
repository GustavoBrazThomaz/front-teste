import { theme } from "@components/styles/theme/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const skeletonPulseKeyframes = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.5 },
  "100%": { opacity: 1 },
});

export const skeletonStyles = style({
  backgroundColor: theme.colors.skeletonBackground,
  animationName: skeletonPulseKeyframes,
  animationDuration: "1.5s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  borderRadius: "1rem",
});
