import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, PRODUCT_PAGE } from "@/routing/links";
import * as styles from "./navbar.m.scss";

export default function Navbar() {
  return (
    <header className={styles.navBar}>
      <nav>
        <NavLink
          to={HOME_PAGE}
          className={styles.navButton}
          end
          style={({ isActive }) => ({
            background: isActive ? "$hooverBackgroundColor" : " ",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to={PRODUCT_PAGE}
          className={styles.navButton}
          end
          style={({ isActive }) => ({
            background: isActive ? "$hooverBackgroundColor" : " ",
          })}
        >
          Products
        </NavLink>

        <NavLink
          to={ABOUT_PAGE}
          className={styles.navButton}
          end
          style={({ isActive }) => ({
            background: isActive ? "$hooverBackgroundColor" : " ",
          })}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
