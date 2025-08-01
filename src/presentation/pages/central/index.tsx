"use client";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import * as constants from "./constants";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { DataTable } from "@components/ui/data-table";
import { CentralType } from "../../types/central-types";
import { Select } from "@components/core/select/Select";
import { useCentralStore } from "@stores/useCentralStore";
import { CentralFormModal } from "@components/ui/central-form-modal";

export function CentralPage() {
  const { totalCentral, toggleCentralModal } = useCentralStore();

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

        <DataTable<CentralType>
          data={constants.mockCentrals}
          columns={constants.columns}
        />
      </Card.Root>

      <CentralFormModal />
    </Container>
  );
}
