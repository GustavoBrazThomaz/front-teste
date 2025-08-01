import { FC, useEffect, useState } from "react";
import { SelectOption, SelectProps } from "./types";
import classNames from "classnames";
import * as styles from "./styles/select.css";
import { Portal } from "@components/utils/portal";
import { ChevronDownIcon } from "@components/icons/chevron-down";

export const Select: FC<SelectProps> = (props) => {
  const {
    className,
    children,
    options,
    onChange,
    defaultValue,
    placeholder = "Selecione",
    ...rest
  } = props;
  const classes = classNames(styles.selectRootStyle, className);
  const defaultOption = options.filter(
    (option) => option.value === defaultValue
  );

  const [value, setValue] = useState<SelectOption | undefined>(
    defaultOption[0] ?? undefined
  );

  const handleChange = (item: SelectOption) => {
    onChange(item);
    setValue(item);
  };

  return (
    <Portal.Provider>
      <div className={classes} {...rest}>
        <Portal.Trigger className={styles.selectTriggerStyle}>
          {value?.label ?? placeholder}
          <ChevronDownIcon
            customSize="1.5rem"
            className={styles.selectChevronStyle}
          />
        </Portal.Trigger>
        <Portal.Viewport className={styles.selectViewPortStyle}>
          <div className={styles.selectOptionsListStyle}>
            {options.map((item) => (
              <Portal.Close
                onClick={() => handleChange(item)}
                className={styles.selectOptionStyle}
                type="button"
                disabled={item.disabled ?? false}
                key={`${item.value}_key`}
              >
                {item.label}
              </Portal.Close>
            ))}
          </div>
        </Portal.Viewport>
      </div>
    </Portal.Provider>
  );
};
