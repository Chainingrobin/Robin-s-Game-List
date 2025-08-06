import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import Sidebar from './components/Sidebar';
import DropdownSelector from './components/DropdownSelector';
import SearchBar from './components/SearchBar';
import { sortGames } from './utils/sortGames';
import type { SortOption } from './utils/sortGames';
import { filterGames, PlatformFilter } from './utils/filterGames';
import { genres, sortOptions, platformOptions } from './constants';
import { searchGames } from './utils/searchGames';
import type { Game } from './types/Game';

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>('default');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
  const fetchGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=40`
      );
      const data = await response.json();
      console.log("Fetched games:", data);  // 🔍 Add this
      setGames(data.results);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    }
  };

  fetchGames();
}, []);


  let displayedGames = [...games];

  if (selectedGenre) {
    displayedGames = displayedGames.filter((game) =>
      game.genres.map((g) => g.name.toLowerCase()).includes(selectedGenre.toLowerCase())
    );
  }

  displayedGames = filterGames(displayedGames, selectedPlatform);
  displayedGames = sortGames(displayedGames, selectedSort);
  displayedGames = searchGames(displayedGames, searchQuery);

  return (
    <div className="bg-dark text-light min-vh-100">
      <header className="py-4 text-center border-bottom border-secondary">
        <h1 className="display-4">Robin's Game List</h1>
      </header>

      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2 col-12 border-end border-secondary px-4 py-3">
            <Sidebar genres={genres} onGenreSelect={setSelectedGenre} />
          </aside>

          <main className="col-md-10 col-12 px-4 py-3">
            <h4 className="mb-4">
              {selectedGenre ? `${selectedGenre} Games` : 'All Games'}
            </h4>

            <div className="mb-4 d-flex flex-wrap gap-3 align-items-center">
              <DropdownSelector
                label="Sort by"
                value={selectedSort}
                onChange={(value) => setSelectedSort(value as SortOption)}
                options={sortOptions}
              />
              <DropdownSelector
                label="Platform"
                value={selectedPlatform}
                onChange={(value) => setSelectedPlatform(value as PlatformFilter)}
                options={platformOptions}
              />
              <div className="flex-grow-1">
                <SearchBar query={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>

            <div className="row">
              {displayedGames.length === 0 && (<p className="text-warning">No games to show. Check your API key or filtering.</p>)}

              {displayedGames.map((game) => (
                <div className="col-sm-6 col-md-6 col-lg-4 mb-4" key={game.id}>
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
