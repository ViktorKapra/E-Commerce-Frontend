import apiEndpoints from "@/api.endpoints";
import { Game } from "@/types/game.types";

export default async function getTopGames(): Promise<Game[]> {
  try {
    const response = await fetch(apiEndpoints.topProducts, { method: "GET" });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return Promise.reject(new Error("Unable to fetch."));
    }
    const data: Game[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
