import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import Sidebar from './components/Sidebar';
import DropdownSelector from './components/DropdownSelector';
import SearchBar from './components/SearchBar';
import PaginationControls from './components/Pagination';
import { genres, sortOptions, platformOptions, platformMap } from './constants';
import type { Game } from './types/Game';
import type { SortOption } from './constants';
import type { PlatformFilter } from './constants';
import type { Genre } from './types/Genre';
import ScrollToTopButton from './components/ScrollToTopButton';
import GameCardSkeleton from './components/GameCardSkeleton';


import './styles/customstyle.css';
import './styles/nier.css';

function App() {
  
  const [games, setGames] = useState<Game[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>('default');
  const [isAZ, setIsAZ] = useState(true); // NEW: track A-Z or Z-A
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalGames, setTotalGames] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const gamesPerPage = 24;


useEffect(() => {
  const fetchGames = async () => {
    try {
      setIsLoading(true); // ⬅️ Start loading

      const params = new URLSearchParams({
        key: import.meta.env.VITE_RAWG_API_KEY,
        page: currentPage.toString(),
        page_size: gamesPerPage.toString(),
      });

      if (searchQuery) params.append('search', searchQuery);
      if (selectedGenre) params.append('genres', selectedGenre.slug);
      if (selectedPlatform !== 'All') {
        const platformId = platformMap[selectedPlatform];
        if (platformId) params.append('platforms', platformId.toString());
      }

      if (selectedSort !== 'default') {
        const direction = isAZ ? '' : '-';
        params.append('ordering', `${direction}${selectedSort}`);
      }

      const response = await fetch(`https://api.rawg.io/api/games?${params.toString()}`);
      const data = await response.json();

      setGames(data.results);
      setTotalGames(data.count);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    } finally {
      setIsLoading(false); // ⬅️ Stop loading, even if fetch fails
    }
  };

  fetchGames();
}, [currentPage, selectedGenre, selectedPlatform, searchQuery, selectedSort, isAZ]);


  const totalPages = Math.ceil(totalGames / gamesPerPage);
  const start = (currentPage - 1) * gamesPerPage + 1;
  const end = Math.min(currentPage * gamesPerPage, totalGames);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <header className="d-flex align-items-center px-4 py-3">
        <h1 className="benguiat-header mb-0 me-4">Robin's Game List</h1>
        <div className="flex-grow-1">
          <SearchBar
            query={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);
              setCurrentPage(1);
            }}
            totalGames={totalGames}
          />
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <aside className="sidebar text-center col-md-2 col-12 px-4 py-3">
            <Sidebar
              genres={genres}
              onGenreSelect={(genre) => {
                setSelectedGenre(genre);
                setCurrentPage(1);
              }}
            />
          </aside>

          <main className="col-md-10 col-12 px-4 py-3 content-area">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0 all-games-header">
                {selectedGenre ? `${selectedGenre.label} Games` : 'All Games'}
              </h4>
            </div>

              <div className="mb-4 d-flex flex-wrap gap-3 align-items-center">
                <div className="d-flex align-items-center gap-2">

                  <DropdownSelector
                    label="Sort by"
                    value={selectedSort}
                    onChange={(value) => {
                      setSelectedSort(value as SortOption);
                      setCurrentPage(1);
                    }}
                    options={sortOptions}
                    
                     {...(selectedSort !== 'default' && {
                      sortDirection: isAZ ? 'asc' : 'desc',
                      onToggleDirection: () => setIsAZ((prev) => !prev),
                    })}
                  />
                </div>

                <DropdownSelector
                  label="Platform"
                  value={selectedPlatform}
                  onChange={(value) => {
                    setSelectedPlatform(value as PlatformFilter);
                    setCurrentPage(1);
                  }}
                  options={platformOptions}
                />

              </div>

              <div className="row">
                {games.length === 0 && !isLoading && (
                  <p className="text-warning">
                    No games to show. Try changing filters or check your API key.
                  </p>
                )}

                {isLoading
                  ? Array.from({ length: 20 }).map((_, index) => (
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <GameCardSkeleton />
                      </div>
                    ))
                  : games.map((game) => (
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
