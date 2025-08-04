export type multiSelectOptions = {
  value: string;
  label: string;
};

export type multiSelectProps = {
  options: multiSelectOptions[];
  onChooseFilters: (itemsSelected: multiSelectOptions[]) => void;
  placeholder: string;
  defaultValues?: string[];
  className?: string;
};
