import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/fallback/fallbackRenderer";
import SignInModal from "@/components/sign_in/signInModal";
import SignUpModal from "@/components/sign_up/signUpModal";
import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./mainLayout.m.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
      <Header />
      <main className={styles.container}>{children}</main>
      <SignInModal />
      <SignUpModal />
      <Footer />
    </ErrorBoundary>
  );
}
