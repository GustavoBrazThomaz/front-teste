import { ModalRootProps } from "./types";
import { Dialog } from "@radix-ui/react-dialog";

export function ModalRoot({ children, className, ...rest }: ModalRootProps) {
  return <Dialog {...rest}>{children}</Dialog>;
}
