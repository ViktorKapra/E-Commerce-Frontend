import { ReactNode } from "react";
import { Game } from "@/types/game.types";
import * as styles from "./gameCard.m.scss";

function CardFront({ game, starsComponents }: { game: Game; starsComponents: ReactNode[] }) {
  return (
    <div className={styles.flipCardFront}>
      <img className={styles.image} src={game.image} alt={game.name} />
      <div className={styles.gameInfo}>
        <div className={styles.namePriceContainer}>
          <h4>{game.name}</h4>
          <p>{game.price}$</p>
        </div>
        <div className={styles.starContainer}>{starsComponents}</div>
      </div>
    </div>
  );
}

function CardBack({ game }: { game: Game }) {
  return (
    <div className={styles.flipCardBack}>
      <p>
        {game.description} <br />{" "}
      </p>
      <p> Rate {game.rating}</p>
      <button type="submit">Add to chart</button>
    </div>
  );
}

export default function GameCard({ game }: { game: Game }) {
  const starsComponents: ReactNode[] = [];
  for (let i = 0; i < game.totalRating; i++) {
    starsComponents.push(<span className={styles.star}>★</span>);
  }

  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <CardFront game={game} starsComponents={starsComponents} />
          <CardBack game={game} />
        </div>
      </div>
      <p> </p>
    </>
  );
}
