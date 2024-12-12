import { Game } from "@/types/game.types";
import * as styles from "./gameCard.m.scss";
import CardBack from "./cardBack";
import CardFront from "./cardFront";

export default function GameCard({ game }: { game: Game }) {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <CardFront game={game} />
          <CardBack game={game} />
        </div>
      </div>
      <p> </p>
    </>
  );
}
