import { CheckIcon } from "@components/icons/check";
import { ChevronDownIcon } from "@components/icons/chevron-down";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { isDefaultEqualToSelected } from "./helpers/is-selection-equal-to-default";
import * as styles from "./styles/multi-select.css";
import { multiSelectOptions, multiSelectProps } from "./types";

export const MultiSelect: FC<multiSelectProps> = (props) => {
  const { onChooseFilters, options, placeholder, defaultValues, className } =
    props;
  const defaultItemsSelected = defaultValues
    ? options.filter((item) => defaultValues.includes(item.value))
    : [];
  const classes = classNames(styles.multiSelectTriggerStyle, className);
  const [itemsSelected, setItemsSelected] = useState<multiSelectOptions[]>([]);

  useEffect(() => {
    setItemsSelected(defaultItemsSelected);
  }, [defaultValues]);

  const handleCheckedChange = (item: multiSelectOptions, checked: boolean) => {
    setItemsSelected((prevSelected) => {
      if (checked) {
        return [...prevSelected, item];
      }

      return prevSelected.filter((selected) => selected.value !== item.value);
    });
  };

  const triggerText =
    itemsSelected.length > 0
      ? `${itemsSelected.length} Selecionados`
      : placeholder;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      if (!isDefaultEqualToSelected(defaultItemsSelected, itemsSelected)) {
        onChooseFilters(itemsSelected);
      }
    }
  };

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className={classes}>
          {triggerText}

          <ChevronDownIcon
            customSize="1.5rem"
            className={styles.multiSelectChevronStyle}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.multiSelectOptionsListStyle}>
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            className={styles.multiSelectOptionStyle}
            checked={itemsSelected.some((i) => i.value === item.value)}
            onCheckedChange={(checked) => handleCheckedChange(item, checked)}
            onSelect={(e) => e.preventDefault()}
          >
            <span className={styles.multiSelectIndicatorStyle}>
              <CheckIcon
                customSize="1.5rem"
                className={styles.checkIconStyle}
              />
            </span>
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
