// utils/searchGames.ts

import type { Game } from '../gameData';

export function searchGames(games: Game[], query: string): Game[] {
  if (!query.trim()) return games;

  const lowerQuery = query.toLowerCase();

  return games.filter((game) => game.title.toLowerCase().includes(lowerQuery));
}
