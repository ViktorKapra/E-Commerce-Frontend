import apiEndpoints from "@/api.endpoints";
import { Game } from "@/types/game.types";

export async function getTopGames(): Promise<Game[]> {
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
export async function getSearchGames(text: string): Promise<Game[]> {
  try {
    const url = `${apiEndpoints.searchProducts}${text}`;
    console.log(url);
    const response = await fetch(url, { method: "GET" });

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
