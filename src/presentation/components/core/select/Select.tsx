import { FC, useEffect, useState } from "react";
import { SelectOption, SelectProps } from "./types";
import classNames from "classnames";
import * as style from "./styles/select.css";
import { Portal } from "@components/utils/portal";
import { ChevronDownIcon } from "@components/icons/chevron-down";

export const Select: FC<SelectProps> = (props) => {
  const { className, children, options, onChange, defaultValue, ...rest } =
    props;
  const classes = classNames(style.selectRootStyle, className);
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
        <Portal.Trigger className={style.selectTriggerStyle}>
          {value?.label ?? "Selecione"}
          <ChevronDownIcon customSize="1.5rem" />
        </Portal.Trigger>
        <Portal.Viewport className={style.selectViewPortStyle}>
          <div className={style.selectOptionsListStyle}>
            {options.map((item) => (
              <button
                type="button"
                disabled={item.disabled ?? false}
                key={`${item.value}_key`}
                onClick={() => handleChange(item)}
                className={style.selectOptionStyle}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Portal.Viewport>
      </div>
    </Portal.Provider>
  );
};
