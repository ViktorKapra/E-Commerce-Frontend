import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/fallback/fallbackRenderer";
import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./mainLayout.m.scss";

export default function MainLayout({
  children,
  isAuthenticated,
  setIsAuthenticated,
}: {
  children: ReactNode;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}) {
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      {/* <Modal open={!isSignInOpened} handleClose={setIsSignInOpened}>
        <SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} />
      </Modal>*/}
      <main className={styles.container}>{children}</main>
      <Footer />
    </ErrorBoundary>
  );
}
