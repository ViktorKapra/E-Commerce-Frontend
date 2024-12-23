import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, SHOPPING_CART_PAGE, USER_PAGE, SING_OUT } from "@/routing/links";
import clsx from "clsx";
import LOG_OUT_ICON from "@/assets/images/icons/logout.png";
import SHOPPING_CART_ICON from "@/assets/images/icons/shoppingCart.png";
import USER_ICON from "@/assets/images/icons/userIcon.png";
import { AuthContext } from "@/helpers/context/authContext";
import { useContext } from "react";
import ProductDropDownMenu from "./productDropDownMenu";
import * as styles from "./navbar.m.scss";

export default function Navbar() {
  const { authenticatedUser, setAuthenticatedUser, setIsSignInModalOpened, setIsSignUpModalOpened } = useContext(AuthContext);

  const openSignInModal = () => {
    setIsSignInModalOpened(true);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpened(true);
  };
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
            <button type="button" className={styles.navButton} onClick={() => openSignInModal()}>
              Sign In
            </button>
            <button type="button" className={styles.navButton} onClick={() => openSignUpModal()}>
              Sign up
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
