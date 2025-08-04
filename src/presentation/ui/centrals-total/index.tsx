"use client";
import { FC, useEffect } from "react";
import { CentralsTotalProps } from "./types";
import { ServerIcon } from "@components/icons/server";
import classNames from "classnames";
import * as styles from "./styles/centrals-total.css";
import { useCentralStore } from "@stores/use-central-store";
import { useCentralsTotalQuery } from "../../hooks/centrals/use-centrals-total-query";
import { Skeleton } from "@components/core/skeleton";

export const CentralsTotal: FC<CentralsTotalProps> = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(styles.centralsTotalContainer, className);
  const { totalCentral, setTotalCentral } = useCentralStore();
  const { data, isLoading } = useCentralsTotalQuery();

  useEffect(() => {
    setTotalCentral(data);
  }, [data]);

  if (isLoading)
    return <Skeleton className={styles.loadingCentralsTotalStyle} />;

  return (
    <div className={classes} {...rest}>
      <ServerIcon customSize="2rem" />
      <span className={styles.centralsTotalText}> Total de centrais:</span>
      <div className={styles.centralsTotalCard}>{totalCentral}</div>
    </div>
  );
};
