/*import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import Sidebar from './components/Sidebar';
import DropdownSelector from './components/DropdownSelector';
import SearchBar from './components/SearchBar';
import PaginationControls from './components/Pagination';
//import { sortGames } from './utils/sortGames';
//import { filterGames, PlatformFilter } from './utils/filterGames';
//import { searchGames } from './utils/searchGames';
import { getVisiblePageNumbers } from './utils/paginationUtils';
import { genres, sortOptions, platformOptions } from './constants';
import type { Game } from './types/Game';
//import type { SortOption } from './utils/sortGames';
import type { PlatformFilter } from './constants'
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import Sidebar from './components/Sidebar';
import DropdownSelector from './components/DropdownSelector';
import SearchBar from './components/SearchBar';
import PaginationControls from './components/Pagination';

import { getVisiblePageNumbers } from './utils/paginationUtils';
import { genres, sortOptions, platformOptions, platformMap } from './constants';

import type { Game } from './types/Game';
import type { SortOption } from './constants';
import type { PlatformFilter } from './constants';

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>('default');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalGames, setTotalGames] = useState(0); // NEW: total count from API

  const gamesPerPage = 24;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const params = new URLSearchParams({
          key: import.meta.env.VITE_RAWG_API_KEY,
          page: currentPage.toString(),
          page_size: gamesPerPage.toString(),
        });

        if (searchQuery) {
          params.append('search', searchQuery);
        }

        if (selectedGenre) {
          params.append('genres', selectedGenre);
        }

        if (selectedPlatform !== 'All') {
          const platformId = platformMap[selectedPlatform];
          if (platformId) {
            params.append('platforms', platformId.toString());
          }
        }

        if (selectedSort !== 'default') {
          params.append('ordering', selectedSort);
        }

        const response = await fetch(`https://api.rawg.io/api/games?${params.toString()}`);
        const data = await response.json();

        setGames(data.results);
        setTotalGames(data.count); // Save total results for pagination

      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames();
  }, [currentPage, selectedGenre, selectedPlatform, searchQuery, selectedSort]);

  const totalPages = Math.ceil(totalGames / gamesPerPage);
  const start = (currentPage - 1) * gamesPerPage + 1;
  const end = Math.min(currentPage * gamesPerPage, totalGames);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="bg-dark text-light min-vh-100">
      <header className="py-4 text-center border-bottom border-secondary">
        <h1 className="display-4">Robin's Game List</h1>
      </header>

      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2 col-12 border-end border-secondary px-4 py-3">
            <Sidebar
              genres={genres}
              onGenreSelect={(genre) => {
                setSelectedGenre(genre);
                setCurrentPage(1);
              }}
            />
          </aside>

          <main className="col-md-10 col-12 px-4 py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">
                {selectedGenre ? `${selectedGenre} Games` : 'All Games'}
              </h4>
              <small className="text-muted">{totalGames} games found</small>
            </div>

            <div className="mb-4 d-flex flex-wrap gap-3 align-items-center">
              <DropdownSelector
                label="Sort by"
                value={selectedSort}
                onChange={(value) => {
                  setSelectedSort(value as SortOption);
                  setCurrentPage(1);
                }}
                options={sortOptions}
              />
              <DropdownSelector
                label="Platform"
                value={selectedPlatform}
                onChange={(value) => {
                  setSelectedPlatform(value as PlatformFilter);
                  setCurrentPage(1);
                }}
                options={platformOptions}
              />
              <div className="flex-grow-1">
                <SearchBar
                  query={searchQuery}
                  onChange={(value) => {
                    setSearchQuery(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="row">
              {games.length === 0 && (
                <p className="text-warning">No games to show. Try changing filters or check your API key.</p>
              )}

              {games.map((game) => (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={game.id}>
                  <GameCard game={game} />
                </div>
              ))}
            </div>

            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              resultsRange={{ start, end, total: totalGames }}
              />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
