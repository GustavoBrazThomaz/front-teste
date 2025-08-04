import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const modalBodyStyle = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  maxHeight: "60vh",
  maxWidth: "90vw",
  transform: "translate(-50%, -50%)",
  zIndex: "101",
  fontSize: "2rem",
  backgroundColor: theme.colors.secondarySurface,
  padding: "4rem",
  borderRadius: "1rem",
});

export const modalOverlayStyle = style({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter:  "blur(3px)",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
});
