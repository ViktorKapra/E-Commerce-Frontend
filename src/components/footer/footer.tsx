import epicLogo from "images/footer/epicGamesLogo.svg"; // start-path is 'images/' because we have an alias 'images' in webpack.common.js
import riotLogo from "images/footer/riotGames.svg";
import rockstarLogo from "images/footer/rockstarGamesLogo.svg";
import * as styles from "./footer.m.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}> Incredible slogan</p>
      <div className={styles.imageContainer}>
        <img src={rockstarLogo} alt="rockstarGamesLogo" />
        <img src={epicLogo} alt="epicGamesLogo" />
        <img src={riotLogo} alt="RiotGamesLogo" />
      </div>
    </footer>
  );
}
