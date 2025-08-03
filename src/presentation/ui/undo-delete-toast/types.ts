import { ToastContentProps } from "react-toastify";

export type undoDeleteToastProps = {
  onUndo: () => void;
} & Partial<ToastContentProps>;
