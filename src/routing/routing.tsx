import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "@/components/main/mainLayout";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE, PRODUCT_PAGE_CATEGORY, USER_PAGE } from "@/routing/links";
import { useState } from "react";
import UserPage from "@/components/user/userPage";
import PrivateComponent from "@/routing/privateComponent";

export default function Routing() {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isSignInModalOpened, setIsSignInModalOpened] = useState(false);
  const [isSignUpModalOpened, setIsSignUpModalOpened] = useState(false);
  return (
    <BrowserRouter>
      <MainLayout
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
        isSignInModalOpened={isSignInModalOpened}
        setIsSignInModalOpened={setIsSignInModalOpened}
        isSignUpModalOpened={isSignUpModalOpened}
        setIsSignUpModalOpened={setIsSignUpModalOpened}
      >
        <Routes>
          <Route index path={HOME_PAGE} element={<HomePage />} />
          <Route
            path={USER_PAGE}
            element={
              <PrivateComponent
                authenticatedUser={authenticatedUser}
                isOpenSignInModal={isSignInModalOpened}
                setSignInModal={setIsSignInModalOpened}
              >
                <UserPage />
              </PrivateComponent>
            }
          />
          <Route
            path={ABOUT_PAGE}
            element={
              <PrivateComponent
                authenticatedUser={authenticatedUser}
                isOpenSignInModal={isSignInModalOpened}
                setSignInModal={setIsSignInModalOpened}
              >
                <AboutPage />
              </PrivateComponent>
            }
          />
          <Route
            path={PRODUCT_PAGE}
            element={
              <PrivateComponent
                authenticatedUser={authenticatedUser}
                isOpenSignInModal={isSignInModalOpened}
                setSignInModal={setIsSignInModalOpened}
              >
                <ProductPage />
              </PrivateComponent>
            }
          />
          <Route
            path={PRODUCT_PAGE_CATEGORY}
            element={
              <PrivateComponent
                authenticatedUser={authenticatedUser}
                isOpenSignInModal={isSignInModalOpened}
                setSignInModal={setIsSignInModalOpened}
              >
                <ProductPage />
              </PrivateComponent>
            }
          />
          <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
