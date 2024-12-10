import { useParams } from "react-router";

export default function ProductPage() {
  const params = useParams();
  const category = typeof params.category !== "undefined" && params.category ? params.category : "No category";
  return (
    <section>
      <h2>Wellcome to product page!</h2>
      <p> Category choosed {category}</p>
    </section>
  );
}
