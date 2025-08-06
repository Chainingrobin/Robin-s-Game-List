// constants.ts

export const genres = [
  { label: 'Action', slug: 'action', color: 'primary' },
  { label: 'Strategy', slug: 'strategy', color: 'warning' },
  { label: 'RPG', slug: 'role-playing-games-rpg', color: 'danger' },
  { label: 'Free Online Games', slug: 'massively-multiplayer', color: 'info' },
  { label: 'Shooter', slug: 'shooter', color: 'success' },
  { label: 'Adventure', slug: 'adventure', color: 'secondary' },
  { label: 'Puzzle', slug: 'puzzle', color: 'dark' },
  { label: 'Racing', slug: 'racing', color: 'light' },
  { label: 'Sports', slug: 'sports', color: 'primary' },
];

// constants.ts
export const platformMap: Record<string, number> = {
  'PC': 4,
  'PlayStation': 18,
  'Xbox': 1,
  'Nintendo': 7,
  'iOS': 3,
  'Android': 21,
};

// Make sure your platformOptions use the same strings:
export const platformOptions = [
  { label: 'All', value: 'All' },
  { label: 'PC', value: 'PC' },
  { label: 'PlayStation', value: 'PlayStation' },
  { label: 'Xbox', value: 'Xbox' },
  { label: 'Nintendo', value: 'Nintendo' },
];

export type PlatformFilter = 'All' | 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo' | 'Other';


// Make sure your sortOptions map to valid RAWG `ordering` values:
export const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Name (A-Z)', value: 'name' },
  { label: 'Release Date', value: '-released' },
  { label: 'Rating', value: '-rating' },
  { label: 'Popularity', value: '-added' },
];

export type SortOption = 'default' | 'name' | '-released' | '-rating' | '-added';



