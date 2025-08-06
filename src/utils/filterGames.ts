import type { Game } from '../gameData';

export type PlatformFilter = 'All' | 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo';

const mapPlatforms = (rawPlatform: string): string[] => {
  const parts = rawPlatform.split(',').map(p => p.trim().toLowerCase());
  const result: string[] = [];

  for (const p of parts) {
    if (["ps1", "ps2", "ps3", "ps4", "ps5", "ps vita", "playstation"].includes(p))
      result.push("PlayStation");
    if (["xbox", "xbox one", "xbox 360", "series x", "series s"].includes(p))
      result.push("Xbox");
    if (["switch", "wii", "wiiu", "wii u", "3ds", "2ds", "nintendo"].includes(p))
      result.push("Nintendo");
    if (["pc", "mac", "windows", "linux"].includes(p))
      result.push("PC");
  }

  return [...new Set(result)]; // remove duplicates
};

export const filterGames = (games: Game[], platform: PlatformFilter): Game[] => {
  if (platform === 'All') return games;

  return games.filter((game) =>
    mapPlatforms(game.platform).includes(platform)
  );
};
