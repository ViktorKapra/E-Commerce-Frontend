import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import PC_LOGO from "@/assets/images/logos/computer.svg";
import XBOX_LOGO from "@/assets/images/logos/xbox.svg";
import PLAYSTATION_LOGO from "@/assets/images/logos/playstation.svg";
import CategoryButton from "@/elements/buttons/categoryButton";
import { PC, XBOX, PLAYSTATION } from "@/routing/links";
import { useNavigate } from "react-router";
import * as styles from "./homePage.m.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = (selectedValue: string) => {
    console.log("Product category", selectedValue, "was selected");
    if (selectedValue) {
      navigate(`/products/${selectedValue}`);
    }
  };

  const categoriesButtons = [
    <CategoryButton src={PC_LOGO} category="PC" onClick={() => handleClick(PC)} />,
    <CategoryButton src={XBOX_LOGO} category="XBox One" onClick={() => handleClick(XBOX)} />,
    <CategoryButton src={PLAYSTATION_LOGO} category="Playstation 5" onClick={() => handleClick(PLAYSTATION)} />,
  ];
  const newGamesCards = [<p>Game 1</p>, <p>Game 2</p>, <p>Game 3</p>];
  return (
    <section className={styles.section}>
      <h2>Wellcome to home page!</h2>
      <NamedSectionForElements name="Categories" elements={categoriesButtons} />
      <NamedSectionForElements name="New Games" elements={newGamesCards} />
    </section>
  );
}
