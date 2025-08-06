import type { Game } from '../types/Game';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card bg-dark text-white h-100 shadow-sm">
      {/* Game cover */}
      <img
        src={game.background_image || 'https://via.placeholder.com/300x200'}
        className="card-img-top"
        alt={game.name}
        style={{ objectFit: 'cover', height: '300px' }}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{game.name}</h5>
        
        <p className="card-text mb-1">
          <strong>Genres:</strong>{' '}
          {game.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
        </p>

        <p className="card-text mb-1">
          <strong>Platforms:</strong>{' '}
          {game.platforms
            ?.map((p) => p.platform?.name)
            .filter(Boolean)
            .join(', ') || 'N/A'}
        </p>

        <p className="card-text mb-1">
          <strong>Release Date:</strong> {game.released || 'N/A'}
        </p>

        <p className="card-text mb-1">
          <strong>Rating:</strong> {game.rating?.toFixed(1) || 'N/A'} ⭐
        </p>
      </div>
    </div>
  );
};

export default GameCard;
