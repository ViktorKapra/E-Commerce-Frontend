import { useParams } from "react-router";
import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import { Suspense } from "react";
import useGameFilter from "@/helpers/custom_hooks/useGameFilter";
import FilterRadioButton from "@/elements/controls/filterRadioButton";
import { GENRES, AGE_RATINGS } from "@/helpers/constants";
import { Game } from "@/types/game.types";
import SearchBar from "@/elements/controls/searchBar";
import useContentManagement from "@/helpers/custom_hooks/useContentManagement";
import { getSearchGames } from "@/api/game";
import GameCard from "@/components/game/gameCard";
import * as styles from "./productPage.m.scss";

export default function ProductPage() {
  const params = useParams();
  const contentManager = useContentManagement<Game>();
  const category = typeof params.category !== "undefined" && params.category ? params.category : "No category";
  const filter = useGameFilter(contentManager.setContent);
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
            <select className={styles.dropdown} value={filter.criteria} onChange={(e) => filter.setCriteria(e.target.value as keyof Game)}>
              <option value={"name" as keyof Game}>Name</option>
              <option value={"price" as keyof Game}>Price</option>
              <option value={"totalRating" as keyof Game}>Rating</option>
            </select>
            <select className={styles.dropdown} value={filter.type} onChange={(e) => filter.setType(e.target.value as "asc" | "desc")}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </NamedSectionForElements>
          <NamedSectionForElements name="Genres">
            <FilterRadioButton
              value={GENRES.ALL}
              checked={filter.genre === GENRES.ALL}
              name="genre"
              label="All genres"
              onChange={() => filter.setGenre(GENRES.ALL)}
            />
            <br />
            <FilterRadioButton
              value={GENRES.SHOOTER}
              checked={filter.genre === GENRES.SHOOTER}
              name="genre"
              label="Shooter"
              onChange={() => filter.setGenre(GENRES.SHOOTER)}
            />
            <br />
            <FilterRadioButton
              value={GENRES.ARCADE}
              checked={filter.genre === GENRES.ARCADE}
              name="genre"
              label="Arcade"
              onChange={() => filter.setGenre(GENRES.ARCADE)}
            />
            <br />
            <FilterRadioButton
              value={GENRES.SURVIVAL}
              checked={filter.genre === GENRES.SURVIVAL}
              name="genre"
              label="Survival"
              onChange={() => filter.setGenre(GENRES.SURVIVAL)}
            />
          </NamedSectionForElements>
          <NamedSectionForElements name="Age">
            <FilterRadioButton
              value={AGE_RATINGS.ALL}
              checked={filter.age === AGE_RATINGS.ALL}
              name="age"
              label="ALL"
              onChange={() => filter.setAge(AGE_RATINGS.ALL)}
            />
            <FilterRadioButton
              value={AGE_RATINGS.THREE_PLUS}
              checked={filter.age === AGE_RATINGS.THREE_PLUS}
              name="age"
              label="3+"
              onChange={() => filter.setAge(AGE_RATINGS.THREE_PLUS)}
            />
            <FilterRadioButton
              value={AGE_RATINGS.SIX_PLUS}
              checked={filter.age === AGE_RATINGS.SIX_PLUS}
              name="age"
              label="6+"
              onChange={() => filter.setAge(AGE_RATINGS.SIX_PLUS)}
            />
            <FilterRadioButton
              value={AGE_RATINGS.TWELVE_PLUS}
              checked={filter.age === AGE_RATINGS.TWELVE_PLUS}
              name="age"
              label="12+"
              onChange={() => filter.setAge(AGE_RATINGS.TWELVE_PLUS)}
            />
            <FilterRadioButton
              value={AGE_RATINGS.EIGHTEEN_PLUS}
              checked={filter.age === AGE_RATINGS.EIGHTEEN_PLUS}
              name="age"
              label="18+"
              onChange={() => filter.setAge(AGE_RATINGS.EIGHTEEN_PLUS)}
            />
          </NamedSectionForElements>
        </NamedSectionForElements>
      </div>
      <div className={styles.productContainer}>
        <SearchBar searchedItems={contentManager.content} setSearchedItems={contentManager.setContent} fetchSearchItems={getSearchGames} />
        <NamedSectionForElements name="Products">
          <Suspense fallback={<h1> Loading </h1>}>
            {contentManager.loading ? (
              <p>Loading...</p>
            ) : (
              contentManager.content.map((game: Game) => <GameCard game={game} key={game.id} />)
            )}
          </Suspense>
        </NamedSectionForElements>
      </div>
    </section>
  );
}
