import { Game } from "@/types/game.types";
import * as styles from "@/components/game/cardFront.m.scss";
import StarContainer from "@/components/game/starContainer";
import clsx from "clsx";

export default function CardFront({ game, isShown }: { game: Game; isShown: boolean }) {
  return (
    <div className={clsx(styles.flipCardFront, { [styles.visible]: isShown }, { [styles.invisible]: !isShown })}>
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
