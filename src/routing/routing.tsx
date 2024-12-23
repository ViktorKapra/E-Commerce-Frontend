import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "@/components/main/mainLayout";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE, PRODUCT_PAGE_CATEGORY, USER_PAGE } from "@/routing/links";
import { useMemo, useState } from "react";
import UserPage from "@/components/user/userPage";
import RouteGuard from "@/routing/routeGuard";
import { AuthContext, AuthContextType } from "@/helpers/context/authContext";

export default function Routing() {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isSignInModalOpened, setIsSignInModalOpened] = useState(false);
  const [isSignUpModalOpened, setIsSignUpModalOpened] = useState(false);

  const authValue: AuthContextType = useMemo(
    () => ({
      authenticatedUser,
      setAuthenticatedUser,
      isSignInModalOpened,
      setIsSignInModalOpened,
      isSignUpModalOpened,
      setIsSignUpModalOpened,
    }),
    [authenticatedUser, isSignInModalOpened, isSignUpModalOpened],
  );

  return (
    <AuthContext.Provider value={authValue}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route index path={HOME_PAGE} element={<HomePage />} />
            <Route
              element={
                <RouteGuard
                  authenticatedUser={authenticatedUser}
                  isOpenSignInModal={isSignInModalOpened}
                  setSignInModal={setIsSignInModalOpened}
                />
              }
            >
              <Route path={USER_PAGE} element={<UserPage />} />
              <Route path={ABOUT_PAGE} element={<AboutPage />} />
              <Route path={PRODUCT_PAGE} element={<ProductPage />} />
              <Route path={PRODUCT_PAGE_CATEGORY} element={<ProductPage />} />
            </Route>
            <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
