import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/fallback/fallbackRenderer";
import SignInModal from "@/components/sign_in/signInModal";
import SignUpModal from "@/components/sign_up/signUpModal";
import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./mainLayout.m.scss";

export default function MainLayout({
  children,
  authenticatedUser,
  setAuthenticatedUser,
  isSignInModalOpened,
  setIsSignInModalOpened,
  isSignUpModalOpened,
  setIsSignUpModalOpened,
}: {
  children: ReactNode;
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
  isSignInModalOpened: boolean;
  setIsSignInModalOpened: (value: boolean) => void;
  isSignUpModalOpened: boolean;
  setIsSignUpModalOpened: (value: boolean) => void;
}) {
  const openSignInModal = () => setIsSignInModalOpened(true);
  const openSignUpModal = () => setIsSignUpModalOpened(true);

  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
      <Header
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
        openSignInModal={openSignInModal}
        openSignUpModal={openSignUpModal}
      />
      <main className={styles.container}>{children}</main>

      <SignInModal
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
        isOpened={isSignInModalOpened}
        setIsOpened={setIsSignInModalOpened}
      />
      <SignUpModal
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
        isOpened={isSignUpModalOpened}
        setIsOpened={setIsSignUpModalOpened}
      />

      <Footer />
    </ErrorBoundary>
  );
}
