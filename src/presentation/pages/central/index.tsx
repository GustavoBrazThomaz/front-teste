"use client";
import { Button } from "@components/core/button";
import { Card } from "@components/core/card";
import { Container } from "@components/core/container";
import { Skeleton } from "@components/core/skeleton";
import { Title } from "@components/core/title";
import { EditIcon } from "@components/icons/edit-item";
import { TrashIcon } from "@components/icons/trash";
import { useCentralStore } from "@stores/use-central-store";
import { useDeleteModalStore } from "@stores/use-delete-modal-store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ColumnDef } from "@tanstack/react-table";
import { CentralFormModal } from "@ui/central-form-modal";
import { DataTable } from "@ui/data-table";
import { DeleteModal } from "@ui/delete-modal";
import { SearchCentralForm } from "@ui/search-central-form";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { useCentralMutation } from "../../hooks/centrals/use-central-mutation";
import { useCentralsQueryParams } from "../../hooks/centrals/use-central-query-params";
import { useCentralsQuery } from "../../hooks/centrals/use-centrals-query";
import { useDownloadCentralCsvMutation } from "../../hooks/centrals/use-download-central-csv-mutation";
import * as constants from "./constants";
import * as styles from "./styles/central-page.css";
import { CentralTableType } from "./types";
import { Empty } from "@components/core/empty";

export function CentralPage() {
  const { toggleCentralModal, centralsTotal } = useCentralStore();
  const searchParams = useSearchParams();
  const queryParams = useCentralsQueryParams();
  const { data, refetch, isLoading } = useCentralsQuery(queryParams);
  const { downloadCentralCsv } = useDownloadCentralCsvMutation(queryParams);
  const { toggleDeleteModal } = useDeleteModalStore();
  const { handleDeleteCentral } = useCentralMutation();

  const tableColumns: ColumnDef<CentralTableType>[] = [
    ...constants.columns,
    {
      accessorKey: "id",
      header: "Ações",
      enableSorting: false,
      cell: ({ row }) => (
        <div className={styles.actionCellStyle}>
          <Button
            type="button"
            onClick={() => toggleCentralModal(row.getValue("id"))}
          >
            <EditIcon customSize="1.8rem" />
          </Button>
          <Button
            onClick={() => toggleDeleteModal(row.getValue("id"))}
            type="button"
            variant="danger"
          >
            <TrashIcon customSize="1.8rem" />
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    refetch();
  }, [searchParams]);

  const dataTableTotal = useMemo(() => {
    const excludedKeys = ["page", "items_per_page", "sortBy", "order"];
    const hasOtherFilters = [...searchParams.keys()].some(
      (key) => !excludedKeys.includes(key)
    );
    return hasOtherFilters && data ? data.length : centralsTotal;
  }, [data]);

  return (
    <React.Fragment>
      <Container className={styles.containerPageStyle}>
        <div className={styles.headerStyle}>
          <Title.Root size="medium" className={styles.titleWithSubTitleStyle}>
            <Title.Text>Centrais</Title.Text>
            <Title.Item className={styles.subTitleStyle}>
              Gerencie suas centrais cadastradas
            </Title.Item>
          </Title.Root>

          <div className={styles.headerButtonContainerStyle}>
            <Button
              className={styles.headerButtonStyle}
              onClick={() => downloadCentralCsv.mutate()}
            >
              Download CSV
            </Button>

            <Button
              className={styles.headerButtonStyle}
              onClick={() => toggleCentralModal()}
              variant="secondary"
            >
              Criar central
            </Button>
          </div>
        </div>

        <Skeleton />

        <SearchCentralForm />

        <Card.Root className={styles.tableContainerStyle}>
          <DataTable<CentralTableType>
            isLoading={isLoading}
            title="Lista de Centrais"
            description={`${dataTableTotal} items encontrados`}
            data={data}
            columns={tableColumns}
            total={dataTableTotal}
          />
        </Card.Root>
      </Container>

      <DeleteModal
        title="Excluir Central"
        description="Você tem certeza de que deseja excluir esta central?"
        handleDelete={handleDeleteCentral}
      />
      <CentralFormModal />
      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  );
}
