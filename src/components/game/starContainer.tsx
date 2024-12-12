import * as styles from "@/components/game/starContainer.m.scss";

export default function StarContainer({ count }: { count: number }) {
  return (
    <div className={styles.starContainer}>
      {Array.from({ length: count }, (_, i) => (
        <span className={styles.star} key={i}>
          ★
        </span>
      ))}
    </div>
  );
}
