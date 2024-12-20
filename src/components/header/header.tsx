import Navbar from "./navbar";
import * as styles from "./header.m.scss";

export default function Header({
  authenticatedUser,
  setAuthenticatedUser,
  isSignInModalOpened,
  setIsSignInModalOpened,
  isSignUpModalOpened,
  setIsSignUpModalOpened,
}: {
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
  isSignInModalOpened: boolean;
  setIsSignInModalOpened: (value: boolean) => void;
  isSignUpModalOpened: boolean;
  setIsSignUpModalOpened: (value: boolean) => void;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Game Market</h1>
      <Navbar
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
        isSignInModalOpened={isSignInModalOpened}
        setIsSignInModalOpened={setIsSignInModalOpened}
        isSignUpModalOpened={isSignUpModalOpened}
        setIsSignUpModalOpened={setIsSignUpModalOpened}
      />
    </header>
  );
}
