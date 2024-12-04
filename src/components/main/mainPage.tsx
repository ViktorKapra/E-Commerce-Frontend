import { JSX } from "react/jsx-runtime";
import * as styles from "./mainPage.m.scss";

export default function MainPage({ children }: { children: JSX.Element }): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
