import { ReactNode, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/fallback/fallbackRenderer";
import { authenticate } from "@/redux/features/authUserSlice";
import { useAppDispatch } from "@/redux/hooks";
import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./mainLayout.m.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      dispatch(authenticate(authUser));
    }
  }, []);
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </ErrorBoundary>
  );
}
