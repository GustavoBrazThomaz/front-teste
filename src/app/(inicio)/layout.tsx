import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/core/header";
import { Sidebar } from "@components/core/sidebar";
import { Title } from "@components/core/title";
import { MENU_RESOURCES_CONFIGS } from "@config/menu";
import { ReactNode } from "react";
import * as styles from "./styles.css";
import { CentralsTotal } from "@ui/centrals-total";
import { ReactQueryProvider } from "@config/react-query-provider";
import { ToastContainer } from "react-toastify";
import { toastStyle } from "@styles/toast.css";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
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
              <CentralsTotal />
            </Header.RightGroup>
          </Header.Root>
          {children}
        </div>
      </main>
      <ToastContainer
        theme="dark"
        autoClose={3000}
        className={toastStyle}
        position="bottom-right"
      />
    </ReactQueryProvider>
  );
}
