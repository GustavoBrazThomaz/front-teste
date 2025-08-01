"use client";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import * as constants from "./constants";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { Select } from "@components/core/select/Select";
import { useCentralStore } from "@stores/useCentralStore";
import { CentralFormModal } from "@components/ui/central-form-modal";
import { useCentral, useGetCentrals } from "../../api/hooks/useCentral";
import { DataTable } from "@components/ui/data-table";
import { CentralTableType } from "../../types/central-types";
import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon } from "@components/icons/trash";
import { EditIcon } from "@components/icons/edit-item";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function CentralPage() {
  const { totalCentral, toggleCentralModal } = useCentralStore();
  const { data, isLoading, isError } = useGetCentrals();
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
            onClick={() => deleteCentral.mutate(row.getValue("id"))}
            type="button"
            variants="danger"
          >
            <TrashIcon customSize="1.8rem" />
          </Button>
        </div>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;
  if (!data) return <p>error</p>;

  return (
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
        <div className={styles.tableTopContainerStyle}>
          <Title.Root size="medium" className={styles.titleWithSubTitleStyle}>
            <Title.Text>Lista de Centrais</Title.Text>
            <Title.Item className={styles.subTitleStyle}>
              {totalCentral} centrais encontradas
            </Title.Item>
          </Title.Root>

          <div className={styles.itemsPerPageContainerStyle}>
            <p>Itens por página:</p>
            <Select
              defaultValue={"10"}
              options={constants.itemsPerPage}
              onChange={(option) => console.log(option)}
            />
          </div>
        </div>

        <DataTable<CentralTableType> data={data} columns={tableColumns} />
      </Card.Root>

      <CentralFormModal />
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}
