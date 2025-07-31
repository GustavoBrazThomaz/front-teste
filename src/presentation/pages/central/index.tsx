"use client";
import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";
import { DataTable } from "@components/ui/data-table";
import { CentralType } from "../../types/central-types";
import { ColumnDef } from "@tanstack/react-table";

export const mockCentrals: CentralType[] = [
  { id: 1, name: "Central Principal SP", modelId: 1, mac: "AA:BB:CC:DD:EE:FF" },
  {
    id: 2,
    name: "Central Secundária RJ",
    modelId: 2,
    mac: "11:22:33:44:55:66",
  },
  { id: 3, name: "Central de Backup MG", modelId: 1, mac: "FF:EE:DD:CC:BB:AA" },
  { id: 4, name: "Central Norte RS", modelId: 3, mac: "12:34:56:78:9A:BC" },
  { id: 5, name: "Central Sul BA", modelId: 2, mac: "AB:CD:EF:12:34:56" },
  { id: 6, name: "Central Leste PR", modelId: 4, mac: "98:76:54:32:10:FE" },
  { id: 7, name: "Central Oeste SC", modelId: 1, mac: "DE:AD:BE:EF:CA:FE" },
  { id: 8, name: "Central Centro GO", modelId: 5, mac: "FA:CE:B0:0C:12:34" },
  { id: 9, name: "Central Nordeste CE", modelId: 3, mac: "13:57:9B:DF:24:68" },
  { id: 10, name: "Central Sudeste ES", modelId: 2, mac: "AC:E0:24:68:BD:F1" },
  { id: 11, name: "Central Amazônia AM", modelId: 4, mac: "BE:EF:CA:FE:DE:AD" },
  { id: 12, name: "Central Pantanal MT", modelId: 1, mac: "C0:FF:EE:BA:BE:01" },
  { id: 13, name: "Central Cerrado DF", modelId: 5, mac: "D0:D0:CA:CA:B0:B0" },
  { id: 14, name: "Central Caatinga PE", modelId: 3, mac: "F0:0D:BA:BE:C0:DE" },
  {
    id: 15,
    name: "Central Mata Atlântica RJ",
    modelId: 2,
    mac: "CA:FE:BA:BE:DE:AD",
  },
  { id: 16, name: "Central Pampa RS", modelId: 4, mac: "AB:CD:12:34:EF:56" },
  { id: 17, name: "Central Litoral SP", modelId: 1, mac: "12:AB:34:CD:56:EF" },
  { id: 18, name: "Central Serra MG", modelId: 5, mac: "98:FE:76:DC:54:BA" },
  { id: 19, name: "Central Vale SC", modelId: 3, mac: "11:AA:22:BB:33:CC" },
  { id: 20, name: "Central Planalto PR", modelId: 2, mac: "DD:EE:FF:00:11:22" },
  { id: 21, name: "Central Sertão BA", modelId: 4, mac: "33:44:55:66:77:88" },
  { id: 22, name: "Central Agreste PE", modelId: 1, mac: "99:AA:BB:CC:DD:EE" },
  {
    id: 23,
    name: "Central Zona da Mata AL",
    modelId: 5,
    mac: "FF:00:11:22:33:44",
  },
  {
    id: 24,
    name: "Central Recôncavo BA",
    modelId: 3,
    mac: "55:66:77:88:99:AA",
  },
  {
    id: 25,
    name: "Central Triângulo MG",
    modelId: 2,
    mac: "BB:CC:DD:EE:FF:00",
  },
  {
    id: 26,
    name: "Central Metropolitana SP",
    modelId: 1,
    mac: "AA:11:BB:22:CC:33",
  },
  {
    id: 27,
    name: "Central Industrial RJ",
    modelId: 4,
    mac: "DD:44:EE:55:FF:66",
  },
  {
    id: 28,
    name: "Central Comercial MG",
    modelId: 2,
    mac: "11:AA:22:BB:33:CC",
  },
  {
    id: 29,
    name: "Central Residencial PR",
    modelId: 3,
    mac: "44:DD:55:EE:66:FF",
  },
  {
    id: 30,
    name: "Central Corporativa SC",
    modelId: 5,
    mac: "77:00:88:11:99:22",
  },
  {
    id: 31,
    name: "Central Educacional RS",
    modelId: 1,
    mac: "AA:33:BB:44:CC:55",
  },
  {
    id: 32,
    name: "Central Hospitalar BA",
    modelId: 4,
    mac: "66:FF:77:00:88:11",
  },
  {
    id: 33,
    name: "Central Governamental DF",
    modelId: 2,
    mac: "99:22:AA:33:BB:44",
  },
  {
    id: 34,
    name: "Central Logística GO",
    modelId: 3,
    mac: "CC:55:DD:66:EE:77",
  },
  {
    id: 35,
    name: "Central Turística CE",
    modelId: 5,
    mac: "FF:88:00:99:11:AA",
  },
  {
    id: 36,
    name: "Central Portuária ES",
    modelId: 1,
    mac: "22:BB:33:CC:44:DD",
  },
  {
    id: 37,
    name: "Central Aeroportuária PE",
    modelId: 4,
    mac: "55:EE:66:FF:77:00",
  },
  {
    id: 38,
    name: "Central Rodoviária AL",
    modelId: 2,
    mac: "88:11:99:22:AA:33",
  },
  {
    id: 39,
    name: "Central Ferroviária MT",
    modelId: 3,
    mac: "BB:44:CC:55:DD:66",
  },
  {
    id: 40,
    name: "Central Energética AM",
    modelId: 5,
    mac: "EE:77:FF:88:00:99",
  },
];

export function CentralPage() {
  const columns: ColumnDef<CentralType>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => row.getValue("id"),
    },
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => row.getValue("name"),
      enableSorting: true,
    },
    {
      accessorKey: "modelId",
      header: "ID do Modelo",
      cell: ({ row }) => row.getValue("modelId"),
      enableSorting: true,
    },
    {
      accessorKey: "mac",
      header: "MAC",
      cell: ({ row }) => row.getValue("mac"),
    },
  ];

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
        <DataTable<CentralType> data={mockCentrals} columns={columns} />
      </Card.Root>
    </Container>
  );
}
