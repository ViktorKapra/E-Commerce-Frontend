import { useEffect, useState } from "react";
import { Game } from "@/types/game.types";
import { getListGames } from "@/api/game";

export default function useGameFilter(setContent: (content: Game[]) => void) {
  const [genre, setGenre] = useState<string>("all");
  const [age, setAge] = useState<string>("all");
  const [criteria, setCriteria] = useState<keyof Game>("name");
  const [type, setType] = useState<"asc" | "desc">("asc");
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    getListGames(genre, age, criteria, type, offset, limit)
      .then(setContent)
      .catch((err) => console.error(err));
  }, [genre, age, criteria, type, offset, limit]);

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
