import { HTMLAttributes } from "react";

export type SelectOption = { label: string; value: string; disabled?: boolean };
export type SelectProps = HTMLAttributes<HTMLDivElement> & {
  options: SelectOption[];
  onChange: (value: SelectOption) => void;
  defaultValue?: string;
  placeholder?: string;
};
