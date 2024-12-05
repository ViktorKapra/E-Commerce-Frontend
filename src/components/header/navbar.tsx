import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, PRODUCT_PAGE } from "@/routing/links";
import clsx from "clsx";
import * as styles from "./navbar.m.scss";

export default function Navbar() {
  return (
    <header className={styles.navBar}>
      <nav>
        <NavLink to={HOME_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Home
        </NavLink>

        <NavLink to={PRODUCT_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Products
        </NavLink>

        <NavLink to={ABOUT_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          About
        </NavLink>
      </nav>
    </header>
  );
}
