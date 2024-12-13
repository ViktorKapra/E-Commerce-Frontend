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
import { getTopGames, getSearchGames } from "@/api/game";
import * as _ from "lodash";
import * as styles from "./homePage.m.scss";

export default function HomePage() {
  const [latestGames, setLatestGames] = useState<Game[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [searchedGames, setSearchedGames] = useState<Game[]>([]);

  useEffect(() => {
    const prom: Promise<Game[]> = getTopGames();
    prom
      .then((res) => {
        setLatestGames(res);
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

  const searchGame = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;
    if (text !== "") {
      const prom: Promise<Game[]> = getSearchGames(text);
      prom
        .then((res) => {
          setSearchedGames(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setSearchedGames([]);
    }
  };

  const chooseGame = (gameName: string) => {
    alert(`Got product ${gameName}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.searchHolder}>
        <input placeholder="Search" className={styles.search} onChange={_.debounce(searchGame, 300)} />
        {searchedGames.length > 0
          ? searchedGames.map((game) => (
              <button className={styles.resultContainer} type="submit" key={game.id} onClick={() => chooseGame(game.name)}>
                {" "}
                {game.name}{" "}
              </button>
            ))
          : null}
      </div>
      <NamedSectionForElements name="Categories">
        <CategoryButton key="pc_button" src={PC_LOGO} category="PC" onClick={() => handleClick(PC)} />
        <CategoryButton key="xbox_button" src={XBOX_LOGO} category="XBox One" onClick={() => handleClick(XBOX)} />
        <CategoryButton key="playstation_button" src={PLAYSTATION_LOGO} category="Playstation 5" onClick={() => handleClick(PLAYSTATION)} />
      </NamedSectionForElements>
      <NamedSectionForElements name="New Games">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <GameCard game={latestGames[0]} key="game1" />
            <GameCard game={latestGames[1]} key="game2" />
            <GameCard game={latestGames[2]} key="game3" />
          </>
        )}
      </NamedSectionForElements>
    </section>
  );
}
