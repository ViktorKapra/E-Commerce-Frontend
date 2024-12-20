import Navbar from "./navbar";
import * as styles from "./header.m.scss";

export default function Header({
  authenticatedUser,
  setAuthenticatedUser,
}: {
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Game Market</h1>
      <Navbar authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
    </header>
  );
}
