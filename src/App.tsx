
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { games } from './gameData';       // Your mock data
import type { Game } from './gameData';   // Type-only import
import GameCard from './components/GameCard';  // Game card component
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Page Header */}
      <header className="py-4 text-center">
        <h1 className="display-4">Robin's Game List</h1>
      </header>
      
      {/* Game Grid */}
      <main className="container">
        <div className="row justify-content-center">
          {games.map((game: Game) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
