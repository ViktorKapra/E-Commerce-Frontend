import Header from "../header/header";
import Footer from "../footer/footer";
import * as styles from "./aboutPage.m.scss";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>Wellcome to about page!</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
