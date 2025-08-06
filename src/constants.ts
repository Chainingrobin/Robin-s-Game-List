// constants.ts
export const genres = [
  { label: 'JRPG', color: 'danger' },
  { label: 'Action RPG', color: 'primary' },
  { label: 'Puzzle', color: 'warning' },
  { label: 'Shooter', color: 'success' },
];

export const sortOptions = [
  { label: 'Default Order', value: 'default' },
  { label: 'Name (A–Z)', value: 'name-asc' },
  { label: 'Name (Z–A)', value: 'name-desc' },
  { label: 'Rating (High → Low)', value: 'rating-desc' },
  { label: 'Rating (Low → High)', value: 'rating-asc' },
  { label: 'Release Date (Newest → Oldest)', value: 'date-desc' },
  { label: 'Release Date (Oldest → Newest)', value: 'date-asc' },
];

export const platformOptions = [
  { label: 'All Platforms', value: 'All' },
  { label: 'PC', value: 'PC' },
  { label: 'PlayStation', value: 'PlayStation' },
  { label: 'Xbox', value: 'Xbox' },
  { label: 'Nintendo', value: 'Nintendo' },
];
