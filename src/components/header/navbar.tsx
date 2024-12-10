import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "@/routing/links";
import clsx from "clsx";
import ProductDropDownMenu from "./productDropDownMenu";
import * as styles from "./navbar.m.scss";

export default function Navbar() {
  return (
    <header className={styles.navBar}>
      <nav>
        <NavLink to={HOME_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Home
        </NavLink>
        <ProductDropDownMenu />
        <NavLink to={ABOUT_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          About
        </NavLink>
        <NavLink to={SIGNIN_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Sign In
        </NavLink>
        <NavLink to={SIGNUP_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}
