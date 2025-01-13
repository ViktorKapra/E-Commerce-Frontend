import { useState } from "react";
import { Game } from "@/types/game.types";

export default function useGameFilter() {
  const [genre, setGenre] = useState<string>("all");
  const [age, setAge] = useState<string>("all");
  const [criteria, setCriteria] = useState<keyof Game>("name");
  const [type, setType] = useState<"asc" | "desc">("asc");
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  return {
    genre,
    setGenre,
    age,
    setAge,
    criteria,
    setCriteria,
    type,
    setType,
    offset,
    setOffset,
    limit,
    setLimit,
  };
}
