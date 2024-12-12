import { Game } from "@/types/game.types";
import * as styles from "@/components/game/cardBack.m.scss";

export default function CardBack({ game }: { game: Game }) {
  return (
    <div className={styles.flipCardBack}>
      <p>
        {game.description} <br />
      </p>
      <p> Rate {game.rating}</p>
      <button type="submit">Add to chart</button>
    </div>
  );
}
