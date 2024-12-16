import * as styles from "@/components/home/homeSearchBar.m.scss";
import * as _ from "lodash";
import { Game } from "@/types/game.types";
import { getSearchGames } from "@/api/game";
import { useState } from "react";

export default function HomeSearchBar() {
  const [searchedGames, setSearchedGames] = useState<Game[]>([]);
  const [emptySearchBar, setEmptySearchBar] = useState<boolean>(true);
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
      setEmptySearchBar(false);
    } else {
      setEmptySearchBar(true);
      setSearchedGames([]);
    }
  };

  const chooseGame = (gameName: string) => {
    alert(`Got product ${gameName}`);
  };

  return (
    <div className={styles.searchHolder}>
      <div className={styles.searchBarWrapper}>
        <input placeholder="Search" className={styles.search} onChange={_.debounce(searchGame, 300)} />
      </div>
      {searchedGames.length === 0 && !emptySearchBar ? (
        <button type="button" className={styles.resultContainer}>
          No results found
        </button>
      ) : null}
      {searchedGames.length > 0
        ? searchedGames.map((game) => (
            <button className={styles.resultContainer} type="submit" key={game.id} onClick={() => chooseGame(game.name)}>
              {game.name}
            </button>
          ))
        : null}
    </div>
  );
}
