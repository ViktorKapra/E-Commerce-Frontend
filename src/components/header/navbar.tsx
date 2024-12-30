import { NavLink } from "react-router";
import { ABOUT_PAGE, HOME_PAGE, SHOPPING_CART_PAGE, USER_PAGE, SING_OUT } from "@/routing/links";
import clsx from "clsx";
import LOG_OUT_ICON from "@/assets/images/icons/logout.png";
import SHOPPING_CART_ICON from "@/assets/images/icons/shoppingCart.png";
import USER_ICON from "@/assets/images/icons/userIcon.png";
import SignInModal from "@/components/sign_in/signInModal";
import SignUpModal from "@/components/sign_up/signUpModal";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAuthUser, logout } from "@/redux/features/authUserSlice";
import { openSignIn } from "@/redux/features/signInSlice";
import ProductDropDownMenu from "./productDropDownMenu";
import * as styles from "./navbar.m.scss";

export default function Navbar() {
  const authenticatedUser = useAppSelector(selectAuthUser);
  const dispatch = useAppDispatch();

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    dispatch(openSignIn());
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  return (
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
          <NavLink to={SHOPPING_CART_PAGE} className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })} end>
            <img src={SHOPPING_CART_ICON} alt="Shopping cart" />
            <p>0</p>
          </NavLink>
          <NavLink
            to={SING_OUT}
            className={({ isActive }) => clsx(styles.navButton, { [styles.navButtonActive]: isActive })}
            onClick={() => dispatch(logout())}
            end
          >
            <img src={LOG_OUT_ICON} alt="Log out" />
          </NavLink>
        </>
      )}
      {authenticatedUser === "" && (
        <>
          <button type="button" className={styles.navButton} onClick={openSignInModal}>
            Sign In
          </button>
          <button type="button" className={styles.navButton} onClick={openSignUpModal}>
            Sign up
          </button>
          <SignInModal />
          <SignUpModal isOpened={isSignUpModalOpen} setIsOpened={setIsSignUpModalOpen} />
        </>
      )}
    </nav>
  );
}
