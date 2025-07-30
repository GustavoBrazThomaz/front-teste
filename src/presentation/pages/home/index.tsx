import { Title } from "@components/core/title";

import * as styles from "./styles/home-page.css";
import { Container } from "@components/core/container";

export const HomePage = () => {
  return (
    <Container className={styles.containerPage} >
      <Title.Root size="medium">
        <Title.Text>HOME</Title.Text>
      </Title.Root>
    </Container>
  );
};
