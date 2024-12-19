import Navbar from "./navbar";
import * as styles from "./header.m.scss";

export default function Header({
  isAuthenticated,
  setIsAuthenticated,
}: {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Game Market</h1>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </header>
  );
}
