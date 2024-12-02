import { NavLink } from "react-router";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "src/routing/Links";
import * as styles from "./header.m.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Game Market</h1>
      <nav>
        <NavLink to={HOME_PAGE} end>
          Home
        </NavLink>
        <NavLink to={PRODUCT_PAGE} end>
          Products
        </NavLink>
        <NavLink to={ABOUT_PAGE}> About </NavLink>
      </nav>
    </header>
  );
}
