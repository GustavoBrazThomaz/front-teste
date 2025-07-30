import { Header } from "@components/core/header";
import { Sidebar } from "@components/core/sidebar";
import { Title } from "@components/core/title";
import { MENU_RESOURCES_CONFIGS } from "@config/menu";
import { ReactNode } from "react";
import * as styles from "./styles.css";
import { ServerIcon } from "@components/icons/server";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.homeLayoutStyle}>
      <Sidebar.Root>
        <Sidebar.Menu resources={MENU_RESOURCES_CONFIGS} />
      </Sidebar.Root>
      <div className={styles.containerPageStyles}>
        <Header.Root>
          <Header.LeftGroup className={styles.headerGroupStyles}>
            <Title.Root size="small">
              <Title.Text>Painel de controle</Title.Text>
            </Title.Root>
          </Header.LeftGroup>
          <Header.RightGroup className={styles.headerGroupStyles}>
            <Title.Root size="small">
              <Title.Text className={styles.headerRightTextStyles}>
                <ServerIcon customSize="2.3rem" />
                Total de centrais: 0
              </Title.Text>
            </Title.Root>
          </Header.RightGroup>
        </Header.Root>
        {children}
      </div>
    </main>
  );
}
