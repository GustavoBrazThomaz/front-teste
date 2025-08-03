"use client";
import { FC, useEffect } from "react";
import { TotalCentralProps } from "./types";
import { ServerIcon } from "@components/icons/server";
import classNames from "classnames";
import { totalCentralStyle } from "./styles/total-central.css";
import { useCentralStore } from "@stores/use-central-store";
import { useCentralsTotalQuery } from "../../../hooks/centrals/use-centrals-total-query";

export const TotalCentral: FC<TotalCentralProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(totalCentralStyle, className);
  const { totalCentral, setTotalCentral } = useCentralStore();
  const { data } = useCentralsTotalQuery();

  useEffect(() => {
    setTotalCentral(data);
  }, [data]);

  return (
    <p className={classes} {...rest}>
      <ServerIcon customSize="2rem" />
      Total de centrais: {totalCentral}
    </p>
  );
};
