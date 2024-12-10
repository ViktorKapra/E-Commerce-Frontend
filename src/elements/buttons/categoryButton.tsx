import * as styles from "./categoryButton.m.scss";

export default function CategoryButton({ src, category, onClick }: { src: string; category: string; onClick: () => void }) {
  return (
    <button className={styles.categoryButton} type="button" onClick={onClick}>
      <img className={styles.image} src={src} alt="PC logo" />
      <p className={styles.p}>{category}</p>
    </button>
  );
}
