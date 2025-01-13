import { useEffect, useState } from "react";
import { Game } from "@/types/game.types";
import useGameFilter from "@/helpers/custom_hooks/useGameFilter";
import { getListGames, getSearchGames } from "@/api/game";

export default function useGameContentManagement() {
  const filter = useGameFilter();
  const [content, setContent] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  function fetchWrapper(fetchContent: Promise<Game[]>) {
    setLoading(true);
    fetchContent
      .then((res) => {
        setContent(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function searchByTitle(text: string) {
    if (text !== "") {
      const fetchContent = getSearchGames(text);
      fetchWrapper(fetchContent);
    } else {
      setContent([]);
    }
  }

  useEffect(() => {
    const fetchContent = getListGames(filter.genre, filter.age, filter.criteria, filter.type, filter.offset, filter.limit);
    fetchWrapper(fetchContent);
  }, [filter.genre, filter.age, filter.criteria, filter.type, filter.offset, filter.limit]);

  return { content, loading, filter, searchByTitle };
}
