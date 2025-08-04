import { multiSelectOptions } from "../types";

export const isDefaultEqualToSelected = (
  defaultValues: multiSelectOptions[],
  selectedValues: multiSelectOptions[]
) => {
  if (defaultValues.length !== selectedValues.length) {
    return false;
  }
  const defaultValue = defaultValues.map((item) => item.value).sort();
  const selectedValue = selectedValues.map((item) => item.value).sort();
  return JSON.stringify(defaultValue) === JSON.stringify(selectedValue);
};
