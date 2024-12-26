import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "@/components/main/mainLayout";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE, PRODUCT_PAGE_CATEGORY, USER_PAGE } from "@/routing/links";
import UserPage from "@/components/user/userPage";
import RouteGuard from "@/routing/routeGuard";
import { SignInContextProvider } from "@/helpers/context/signInContext";

export default function Routing() {
  return (
    <SignInContextProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route index path={HOME_PAGE} element={<HomePage />} />
            <Route element={<RouteGuard />}>
              <Route path={USER_PAGE} element={<UserPage />} />
              <Route path={ABOUT_PAGE} element={<AboutPage />} />
              <Route path={PRODUCT_PAGE} element={<ProductPage />} />
              <Route path={PRODUCT_PAGE_CATEGORY} element={<ProductPage />} />
            </Route>
            <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </SignInContextProvider>
  );
}
