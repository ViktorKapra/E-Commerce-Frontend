import { Game } from "@/types/game.types";
import { useState } from "react";
import clsx from "clsx";
import * as styles from "./gameCard.m.scss";
import CardBack from "./cardBack";
import CardFront from "./cardFront";

export default function GameCard({ game }: { game: Game }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className={clsx(styles.flipCard, { [styles.flipCardFlipped]: isFlipped })}>
        <div className={styles.flipCardInner}>
          <CardFront isShown={!isFlipped} game={game} />
          <CardBack isShown={isFlipped} game={game} />
        </div>
      </div>
    </div>
  );
}
