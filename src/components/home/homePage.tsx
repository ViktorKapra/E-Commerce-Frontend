import NamedSectionForElements from "@/elements/sections/namedSectionForElements";

export default function HomePage() {
  const categoriesButtons = [<button type="button">Category 1</button>, <p>Category 2</p>, <p>Category 3</p>];
  const newGamesCards = [<p>Game 1</p>, <p>Game 2</p>, <p>Game 3</p>];
  return (
    <section>
      <h2>Wellcome to home page!</h2>
      <NamedSectionForElements name="Categories" elements={categoriesButtons} />
      <NamedSectionForElements name="New Games" elements={newGamesCards} />
    </section>
  );
}
