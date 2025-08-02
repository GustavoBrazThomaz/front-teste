"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import * as constants from "./constants";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { Select } from "@components/core/select/Select";
import { useCentralStore } from "@stores/use-central-store";
import { CentralFormModal } from "@components/ui/central-form-modal";
import { useCentral, useGetCentrals } from "../../api/hooks/useCentral";
import { DataTable } from "@components/ui/data-table";
import { CentralTableType } from "../../types/central-types";
import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon } from "@components/icons/trash";
import { EditIcon } from "@components/icons/edit-item";
import { useDeleteModalStore } from "@stores/use-delete-modal-store";
import { DeleteModal } from "@components/ui/delete-modal";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export function CentralPage() {
  const { totalCentral, toggleCentralModal } = useCentralStore();
  const searchParams = useSearchParams();
  const queryParams = {
    page: parseInt(searchParams.get("page") || "0", 10),
    limit: parseInt(searchParams.get("items_per_page") || "10", 10),
  };
  const { data, isError, refetch, isLoading } = useGetCentrals(queryParams);
  const { toggleDeleteModal } = useDeleteModalStore();
  const { deleteCentral } = useCentral();

  const tableColumns: ColumnDef<CentralTableType>[] = [
    ...constants.columns,
    {
      accessorKey: "id",
      header: "Ações",
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

        <Card.Root>
          <Card.Content className={styles.searchContainerStyle}>
            <Input placeholder="Buscar..." fullWidth />
            <Button variants="default">Buscar</Button>
            <Select
              options={constants.options}
              onChange={(value) => console.log(value)}
            />
          </Card.Content>
        </Card.Root>

        <Card.Root className={styles.tableContainerStyle}>
          <DataTable<CentralTableType>
            title="Lista de Centrais"
            description={`${totalCentral} centrais encontradas`}
            data={data}
            columns={tableColumns}
            total={totalCentral}
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
