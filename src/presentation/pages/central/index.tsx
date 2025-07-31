"use client";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { Table } from "@components/core/table";

export function CentralPage() {
  return (
    <Container className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Centrais</Title.Text>
      </Title.Root>

      <Card.Root>
        <Card.Content className={styles.searchContainer}>
          <Input placeholder="Buscar..." fullWidth />
          <Button variants="default">Buscar</Button>
        </Card.Content>
      </Card.Root>

      <Card.Root style={{ marginTop: "4rem" }}>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.Cell>ID</Table.Cell>
              <Table.Cell>nome</Table.Cell>
              <Table.Cell>sobrenome</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>dolly</Table.Cell>
              <Table.Cell>guarana</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>dolly</Table.Cell>
              <Table.Cell>guarana</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>dolly</Table.Cell>
              <Table.Cell>guarana</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Card.Root>
    </Container>
  );
}
