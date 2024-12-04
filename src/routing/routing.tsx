import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "@/routing/links";

export default function Routing(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={ABOUT_PAGE} element={<AboutPage />} />
        <Route path={PRODUCT_PAGE} element={<ProductPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
