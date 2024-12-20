import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "@/components/main/mainLayout";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE, PRODUCT_PAGE_CATEGORY, SIGNIN_PAGE, SIGNUP_PAGE, USER_PAGE } from "@/routing/links";
import { useState } from "react";
import SignIn from "@/components/sign_in/signIn";
import SignUp from "@/components/sign_up/signUp";
import UserPage from "@/components/user/userPage";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";

export default function Routing() {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  return (
    <BrowserRouter>
      <MainLayout authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser}>
        <Routes>
          <Route index path={HOME_PAGE} element={<HomePage />} />
          {authenticatedUser === NONE_AUTHENTICATED_USER && (
            <Route
              path={SIGNIN_PAGE}
              element={<SignIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />}
            />
          )}
          <Route
            path={SIGNUP_PAGE}
            element={
              authenticatedUser === NONE_AUTHENTICATED_USER ? (
                <SignUp authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
              ) : (
                <Navigate to={USER_PAGE} replace />
              )
            }
          />
          <Route
            path={USER_PAGE}
            element={
              authenticatedUser === NONE_AUTHENTICATED_USER ? (
                <SignIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
              ) : (
                <UserPage />
              )
            }
          />
          <Route
            path={ABOUT_PAGE}
            element={
              authenticatedUser === NONE_AUTHENTICATED_USER ? (
                <SignIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
              ) : (
                <AboutPage />
              )
            }
          />
          <Route
            path={PRODUCT_PAGE}
            element={
              authenticatedUser === NONE_AUTHENTICATED_USER ? (
                <SignIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
              ) : (
                <ProductPage />
              )
            }
          />
          <Route
            path={PRODUCT_PAGE_CATEGORY}
            element={
              authenticatedUser === NONE_AUTHENTICATED_USER ? (
                <SignIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
              ) : (
                <ProductPage />
              )
            }
          />
          <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
