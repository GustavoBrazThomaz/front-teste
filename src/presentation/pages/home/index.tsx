import { Title } from "@components/core/title";
import * as styles from "./styles/home-page.css";
import * as constants from "./constants";
import { Container } from "@components/core/container";
import { Card } from "@components/core/card";

export const HomePage = () => {
  return (
    <Container className={styles.containerPage}>
      <Title.Root size="medium" className={styles.titleWithSubTitleStyle}>
        <Title.Text>Home</Title.Text>
        <Title.Item className={styles.subTitleStyle}>
          Visão geral do sistema
        </Title.Item>
      </Title.Root>

      <div className={styles.topCardContainer}>
        {constants.dashBoardInfo.map((item, index) => (
          <Card.Root key={index}>
            <Card.Content>
              <Card.Title className={styles.topCardTitle}>
                {item.title}
              </Card.Title>
              <Card.Content>
                <p className={styles.topCardText}>{item.value}</p>
                <p className={styles.topCardDescription}>{item.description}</p>
              </Card.Content>
            </Card.Content>
          </Card.Root>
        ))}
      </div>

      <div className={styles.bottomCardsContainer}>
        <Card.Root>
          <Card.Title>Atividade Recente</Card.Title>
          <Card.Content>
            Últimas ações realizadas no sistema
            <div className={styles.statusContainer}>
              <div className={styles.statusGreen} />
              <p className={styles.statusText}>
                Nova central adicionada <br />
                <span className={styles.statusHourText}>Há 2 horas</span>{" "}
              </p>
            </div>
            <div className={styles.statusContainer}>
              <div className={styles.statusIndigo} />
              <p className={styles.statusText}>
                Central atualizada
                <br /> <span className={styles.statusHourText}>Há 4 horas</span>
              </p>
            </div>
            <div className={styles.statusContainer}>
              <div className={styles.statusRed} />
              <p className={styles.statusText}>
                Central removida <br />
                <span className={styles.statusHourText}>Há 1 dia</span>{" "}
              </p>
            </div>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Title>Estatísticas</Card.Title>
          <Card.Content>
            Resumo das métricas do sistema
            <br />
            <p className={styles.infoTextContainer}>
              <span className={styles.infoText}>Modelos Cadastrados</span>
              <span>6</span>
            </p>
            <p className={styles.infoTextContainer}>
              <span className={styles.infoText}>Uptime do sistema</span>
              <span className={styles.infoTextValueSuccess}>99.7%</span>
            </p>
          </Card.Content>
        </Card.Root>
      </div>
    </Container>
  );
};
