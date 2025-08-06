
/*import type { Game } from '../types/Game';

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

  const sorted = [...games];

  const sortMap: Record<Exclude<SortOption, 'default'>, (a: Game, b: Game) => number> = {
    'name-asc': (a, b) => a.name.localeCompare(b.name),
    'name-desc': (a, b) => b.name.localeCompare(a.name),
    'rating-asc': (a, b) => a.rating - b.rating,
    'rating-desc': (a, b) => b.rating - a.rating,
    'date-asc': (a, b) => new Date(a.released).getTime() - new Date(b.released).getTime(),
    'date-desc': (a, b) => new Date(b.released).getTime() - new Date(a.released).getTime()
  };

  sorted.sort(sortMap[sortBy]);
  return sorted;
};
