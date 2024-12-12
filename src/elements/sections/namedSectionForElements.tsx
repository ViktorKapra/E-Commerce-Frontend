import { ReactNode } from "react";
import * as style from "./namedSectionForElements.m.scss";

export default function NamedSectionForElements({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className={style.section}>
      <h3 className={style.title}>{name}</h3>
      <div className={style.elementContainer}> {children} </div>
    </section>
  );
}
