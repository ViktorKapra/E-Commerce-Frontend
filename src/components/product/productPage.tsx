import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./productPage.m.scss";

export default function ProductPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>Wellcome to product page!</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
