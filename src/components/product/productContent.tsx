import { Game } from "@/types/game.types";
import { useEffect, useState } from "react";
import { getListGames } from "@/api/game";
import GameCard from "@/components/game/gameCard";

export default function ProductContent({
  genre,
  age,
  criteria,
  type = "asc",
  offset = 0,
  limit = 10,
}: {
  genre: string;
  age: string;
  criteria: keyof Game;
  type: "asc" | "desc";
  offset: number;
  limit: number;
}) {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    getListGames(genre, age, criteria, type, offset, limit).then(setGames);
  }, []);
  return (
    <>
      {games.map((game: Game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </>
  );
}
