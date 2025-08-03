"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import * as constants from "./constants";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { useCentralStore } from "@stores/use-central-store";
import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon } from "@components/icons/trash";
import { EditIcon } from "@components/icons/edit-item";
import { useDeleteModalStore } from "@stores/use-delete-modal-store";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { CentralFormModal } from "@ui/central-form-modal";
import { DataTable } from "@ui/data-table";
import { DeleteModal } from "@ui/delete-modal";
import { SearchCentralForm } from "@ui/search-central-form";
import { CentralTableType } from "./types";
import { useCentralsQuery } from "../../hooks/centrals/use-centrals-query";
import { useCentralMutation } from "../../hooks/centrals/use-central-mutation";
import { useCentralsQueryParams } from "../../hooks/centrals/use-central-query-params";

export function CentralPage() {
  const { toggleCentralModal, totalCentral } = useCentralStore();
  const searchParams = useSearchParams();
  const queryParams = useCentralsQueryParams();
  const { data, isError, refetch, isLoading } = useCentralsQuery(queryParams);
  const { toggleDeleteModal } = useDeleteModalStore();
  const { deleteCentral } = useCentralMutation();

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
            variants="default"
            onClick={() => toggleCentralModal(row.getValue("id"))}
          >
            <EditIcon customSize="1.8rem" />
          </Button>
          <Button
            onClick={() => toggleDeleteModal(row.getValue("id"))}
            type="button"
            variants="danger"
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

  const handleDeleteCentral = (id: string) => {
    deleteCentral.mutate(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;
  if (!data) return <p>error</p>;

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
          <Button onClick={() => toggleCentralModal()} variants="secondary">
            Criar central
          </Button>
        </div>

        <SearchCentralForm />

        <Card.Root className={styles.tableContainerStyle}>
          <DataTable<CentralTableType>
            title="Lista de Centrais"
            description={`${
              queryParams.search ? data.length : totalCentral
            } centrais encontradas`}
            data={data}
            columns={tableColumns}
            total={queryParams.search ? data.length : totalCentral}
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
