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

export default function Routing() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <MainLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
        <Routes>
          <Route index path={HOME_PAGE} element={<HomePage />} />
          {!isAuthenticated && (
            <>
              <Route path={SIGNIN_PAGE} element={<SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} />} />
              <Route path={SIGNUP_PAGE} element={<SignUp isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} />} />
            </>
          )}
          <Route
            path={USER_PAGE}
            element={!isAuthenticated ? <SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} /> : <UserPage />}
          />
          <Route
            path={ABOUT_PAGE}
            element={!isAuthenticated ? <SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} /> : <AboutPage />}
          />
          <Route
            path={PRODUCT_PAGE}
            element={!isAuthenticated ? <SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} /> : <ProductPage />}
          />
          <Route
            path={PRODUCT_PAGE_CATEGORY}
            element={!isAuthenticated ? <SignIn isSignedIn={isAuthenticated} setIsSignIn={setIsAuthenticated} /> : <ProductPage />}
          />
          <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
