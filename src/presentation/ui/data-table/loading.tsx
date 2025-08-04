import { Skeleton } from "@components/core/skeleton";

import * as styles from "./styles/data-table-loading.css";
export const DataTableLoading = () => {
  return (
    <div>
      <div className={styles.headerLoadingContainerStyle}>
        <Skeleton className={styles.headerLoadingStyle} />
        <Skeleton className={styles.headerLoadingStyle} />
      </div>
      <Skeleton className={styles.loadingTableStyle} />
    </div>
  );
};
