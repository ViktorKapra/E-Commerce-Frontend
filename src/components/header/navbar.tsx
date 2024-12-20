import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, SIGNIN_PAGE, SIGNUP_PAGE, SHOPPING_CART_PAGE, USER_PAGE, SING_OUT } from "@/routing/links";
import clsx from "clsx";
import LOG_OUT_ICON from "@/assets/images/icons/logout.png";
import SHOPPING_CART_ICON from "@/assets/images/icons/shoppingCart.png";
import USER_ICON from "@/assets/images/icons/userIcon.png";
import ProductDropDownMenu from "./productDropDownMenu";
import * as styles from "./navbar.m.scss";

export default function Navbar({
  authenticatedUser,
  setAuthenticatedUser,
}: {
  authenticatedUser: string;
  setAuthenticatedUser: (value: string) => void;
}) {
  return (
    <header className={styles.navBar}>
      <nav className={styles.navBar}>
        <NavLink to={HOME_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          Home
        </NavLink>
        <ProductDropDownMenu />
        <NavLink to={ABOUT_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
          About
        </NavLink>
        {authenticatedUser !== "" && (
          <>
            <NavLink to={USER_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
              <img src={USER_ICON} alt="USER_ICON" />
              <p> {authenticatedUser} </p>
            </NavLink>
            <NavLink
              to={SHOPPING_CART_PAGE}
              className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })}
              end
            >
              <img src={SHOPPING_CART_ICON} alt="Shopping cart" />
              <p>0</p>
            </NavLink>
            <NavLink
              to={SING_OUT}
              className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })}
              onClick={() => setAuthenticatedUser("")}
              end
            >
              <img src={LOG_OUT_ICON} alt="Log out" />
            </NavLink>
          </>
        )}
        {authenticatedUser === "" && (
          <>
            <NavLink to={SIGNIN_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
              Sign In
            </NavLink>
            <NavLink to={SIGNUP_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
              Sign Up
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
