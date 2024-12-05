import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "@/components/main/mainLayout";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "@/routing/links";

export default function Routing(): JSX.Element {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path={HOME_PAGE} element={<HomePage />} />
          <Route path={ABOUT_PAGE} element={<AboutPage />} />
          <Route path={PRODUCT_PAGE} element={<ProductPage />} />
          <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
