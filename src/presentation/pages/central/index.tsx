import { Container } from "@components/core/container";
import { Title } from "@components/core/title";
import * as styles from "./styles/central-page.css";

import { Input } from "@components/core/input";
export function CentralPage() {
  return (
    <Container className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Centrais</Title.Text>
      </Title.Root>
    </Container>
  );
}
