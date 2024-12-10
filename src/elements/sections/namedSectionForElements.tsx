import { ReactElement } from "react";

export default function NamedSectionForElements({ name, elements }: { name: string; elements: ReactElement[] }) {
  return (
    <section>
      <h3>{name}</h3>
      <div> {elements}</div>
    </section>
  );
}
