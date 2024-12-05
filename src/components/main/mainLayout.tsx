import { JSX } from "react/jsx-runtime";
import { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./mainLayout.m.scss";

export default function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
