import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import PC_LOGO from "@/assets/images/logos/computer.svg";
import XBOX_LOGO from "@/assets/images/logos/xbox.svg";
import PLAYSTATION_LOGO from "@/assets/images/logos/playstation.svg";
import CategoryButton from "@/elements/buttons/categoryButton";
import { PC, XBOX, PLAYSTATION } from "@/routing/links";
import GameCard from "@/components/game/gameCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Game } from "@/types/game.types";
import getTopGames from "@/api/game";
import * as styles from "./homePage.m.scss";

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const prom: Promise<Game[]> = getTopGames();
    prom
      .then((res) => {
        setGames(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  const handleClick = (selectedValue: string) => {
    console.log("Product category", selectedValue, "was selected");
    if (selectedValue) {
      navigate(`/products/${selectedValue}`);
    }
  };

  const categoriesButtons = [
    <CategoryButton key="pc_button" src={PC_LOGO} category="PC" onClick={() => handleClick(PC)} />,
    <CategoryButton key="xbox_button" src={XBOX_LOGO} category="XBox One" onClick={() => handleClick(XBOX)} />,
    <CategoryButton key="playstation_button" src={PLAYSTATION_LOGO} category="Playstation 5" onClick={() => handleClick(PLAYSTATION)} />,
  ];

  return (
    <section className={styles.section}>
      <h2>Wellcome to home page!</h2>
      <NamedSectionForElements name="Categories">{categoriesButtons}</NamedSectionForElements>
      <NamedSectionForElements name="New Games">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <GameCard game={games[0]} key="game1" />
            <GameCard game={games[1]} key="game2" />
            <GameCard game={games[2]} key="game3" />
          </>
        )}
      </NamedSectionForElements>
    </section>
  );
}
