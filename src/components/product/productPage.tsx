import { useParams } from "react-router";
import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import { Suspense } from "react";
import * as styles from "./productPage.m.scss";

const ProductContent = React.lazy(() => import("@/components/product/productContent"));

export default function ProductPage() {
  const params = useParams();
  const category = typeof params.category !== "undefined" && params.category ? params.category : "No category";

  function chooseTitle(param: string) {
    if (param === "pc") return "PC";
    if (param === "playstaton") return "Playstation 5";
    return "Xbox";
  }
  return (
    <section className={styles.section}>
      <div className={styles.filterContainer}>
        <NamedSectionForElements name={chooseTitle(category)}>
          <NamedSectionForElements name="Sort">
            <p> something</p>
          </NamedSectionForElements>
          <NamedSectionForElements name="Genres">
            <label htmlFor="allGenres">
              All genres
              <input type="radio" id="allGenres" name="fav_language" value="HTML" />
            </label>
            <br />
            <label htmlFor="css">
              CSS
              <input type="radio" id="css" name="fav_language" value="CSS" />
            </label>
            <br />
            <label htmlFor="javascript">
              JavaScript
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            </label>
          </NamedSectionForElements>
          <NamedSectionForElements name="Age">
            <p> something</p>
          </NamedSectionForElements>
        </NamedSectionForElements>
      </div>
      <div className={styles.productContainer}>
        <NamedSectionForElements name="Products">
          <Suspense fallback={<h1> Loading </h1>}>
            <ProductContent genre="all" age="all" criteria="name" type="asc" offset={0} limit={10} />
          </Suspense>
        </NamedSectionForElements>
      </div>
    </section>
  );
}
