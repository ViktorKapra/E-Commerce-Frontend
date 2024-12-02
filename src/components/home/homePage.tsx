import Header from "../header/header";
import * as styles from "./homePage.m.scss";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <body className={styles.body}>
        <section>
          <h2 className={styles.h2}>Wellcome to home page!</h2>
        </section>
      </body>
    </>
  );
}
