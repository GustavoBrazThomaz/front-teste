import { HTMLAttributes } from "react";

export type FormItemProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  error?: string;
};
