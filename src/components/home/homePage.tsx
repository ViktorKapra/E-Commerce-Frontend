import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./homePage.m.scss";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2 className={styles.h2}>Wellcome to home page!</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
