import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "@/components/main/mainPage";
import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/aboutPage";
import ProductPage from "@/components/product/productPage";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "@/routing/links";

export default function Routing(): JSX.Element {
  const homePage: JSX.Element = (
    <MainPage>
      <HomePage />
    </MainPage>
  );
  const aboutPage: JSX.Element = (
    <MainPage>
      <AboutPage />
    </MainPage>
  );
  const productPage: JSX.Element = (
    <MainPage>
      <ProductPage />
    </MainPage>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={homePage} />
        <Route path={HOME_PAGE} element={homePage} />
        <Route path={ABOUT_PAGE} element={aboutPage} />
        <Route path={PRODUCT_PAGE} element={productPage} />
        <Route path="/*" element={homePage} />
      </Routes>
    </BrowserRouter>
  );
}
