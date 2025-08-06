import type { Game } from '../gameData';

export type SortOption = 
  | 'name-asc' 
  | 'name-desc' 
  | 'rating-asc' 
  | 'rating-desc' 
  | 'date-asc' 
  | 'date-desc' 
  | 'default';

export const sortGames = (games: Game[], sortBy: SortOption): Game[] => {
  if (sortBy === 'default') return games;

  const sorted = [...games]; // avoid mutating original

  const sortMap: Record<Exclude<SortOption, 'default'>, (a: Game, b: Game) => number> = {
    'name-asc': (a, b) => a.title.localeCompare(b.title),
    'name-desc': (a, b) => b.title.localeCompare(a.title),
    'rating-asc': (a, b) => a.rating - b.rating,
    'rating-desc': (a, b) => b.rating - a.rating,
    'date-asc': (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime(),
    'date-desc': (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  };

  sorted.sort(sortMap[sortBy]);
  return sorted;
};
