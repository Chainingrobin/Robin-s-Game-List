import axios from 'axios';
import type { Game } from '../types/Game';

export const fetchGames = async (): Promise<Game[]> => {
  const response = await axios.get('https://api.rawg.io/api/games', {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
    },
  });

  const games = response.data.results;

  console.log("✅ Games fetched from API:", games); // <--- ADD THIS

  return games;
};
