import { ReactElement } from "react";
import * as style from "./namedSectionForElements.m.scss";

export default function NamedSectionForElements({ name, elements }: { name: string; elements: ReactElement[] }) {
  return (
    <section className={style.section}>
      <h3 className={style.title}>{name}</h3>
      <div className={style.elementContainer}> {elements} </div>
    </section>
  );
}
