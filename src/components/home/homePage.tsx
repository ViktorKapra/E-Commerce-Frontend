import Header from "../header/header";
import Footer from "../footer/footer";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Wellcome to home page!</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
