
import type { Game } from '../types/Game';

const API_URL = 'https://api.rawg.io/api/games';
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

interface FetchGamesParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
}

export const fetchGames = async ({
  page = 1,
  pageSize = 20,
  searchQuery = ''
}: FetchGamesParams): Promise<{ games: Game[]; total: number }> => {
  const url = new URL(API_URL);

  url.searchParams.append('key', API_KEY);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('page_size', pageSize.toString());

  if (searchQuery) {
    url.searchParams.append('search', searchQuery);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  const data = await response.json();

  return {
    games: data.results,
    total: data.count
  };
};
