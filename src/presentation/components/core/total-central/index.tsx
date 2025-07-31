"use client";
import { FC } from "react";
import { TotalCentralProps } from "./types";
import { ServerIcon } from "@components/icons/server";
import classNames from "classnames";
import { totalCentralStyle } from "./styles/total-central.css";
import { useCentralStore } from "@stores/useCentralStore";

export const TotalCentral: FC<TotalCentralProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(totalCentralStyle, className);
  const { totalCentral } = useCentralStore();
  return (
    <p className={classes} {...rest}>
      <ServerIcon customSize="2rem" />
      Total de centrais: {totalCentral}
    </p>
  );
};
