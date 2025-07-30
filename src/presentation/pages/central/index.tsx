import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";
import { Input } from "@components/core/input";
import { Card } from "@components/core/card";
import { Button } from "@components/core/button";

export function CentralPage() {
  return (
    <Container className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Centrais</Title.Text>
      </Title.Root>

      <Card.Root>
        <Card.Content className={styles.searchContainer}>
          <Input placeholder="Buscar..." fullWidth />
          <Button variants="primary">Buscar</Button>
        </Card.Content>
      </Card.Root>
    </Container>
  );
}
