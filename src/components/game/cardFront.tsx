import { Game } from "@/types/game.types";
import * as styles from "@/components/game/cardFront.m.scss";
import StarContainer from "@/components/game/starContainer";

export default function CardFront({ game }: { game: Game }) {
  return (
    <div className={styles.flipCardFront}>
      <img className={styles.image} src={game.image} alt={game.name} />
      <div className={styles.gameInfo}>
        <div className={styles.namePriceContainer}>
          <h4>{game.name}</h4>
          <p>{game.price}$</p>
        </div>
        <StarContainer count={game.totalRating} />
      </div>
    </div>
  );
}
