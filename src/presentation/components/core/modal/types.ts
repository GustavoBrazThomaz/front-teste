import {
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";
import { HTMLAttributes } from "react";

export type ModalRootProps = HTMLAttributes<HTMLDivElement> & DialogProps;
export type ModalActionsProps = HTMLAttributes<HTMLDivElement>;
export type ModalContentProps = HTMLAttributes<HTMLDivElement> & {title?: string, description?: string};;
export type ModalBodyProps = HTMLAttributes<HTMLDivElement> 
export type ModalProps = HTMLAttributes<HTMLDivElement>;
export type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;
