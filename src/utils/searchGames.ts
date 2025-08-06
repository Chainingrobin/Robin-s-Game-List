
/*import type { Game } from '../types/Game';

export function searchGames(games: Game[], query: string): Game[] {
  if (!query.trim()) return games;

  const lowerQuery = query.toLowerCase();

  return games.filter((game) =>
    game.name.toLowerCase().includes(lowerQuery)
  );
}
