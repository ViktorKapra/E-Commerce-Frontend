import { Game } from "@/types/game.types";
import * as styles from "@/components/game/cardBack.m.scss";
import clsx from "clsx";

export default function CardBack({ game, isShown }: { game: Game; isShown: boolean }) {
  return (
    <div className={clsx(styles.flipCardBack, { [styles.visible]: isShown }, { [styles.invisible]: !isShown })}>
      <p>
        {game.description} <br />
      </p>
      <p> Rate {game.rating}</p>
      <button
        className={styles.button}
        onClick={() => {
          alert("click");
        }}
        type="button"
      >
        Add to chart
      </button>
    </div>
  );
}
