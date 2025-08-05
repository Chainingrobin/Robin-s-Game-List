import type { Game } from '../gameData';

interface Props {
  game: Game;
}

// This is a presentational component to display a single game's info
const GameCard = ({ game }: Props) => {
  return (
    <div className="card bg-dark text-white h-100 shadow-sm">
      {/* Cover image on top */}
      <img
        src={game.imageUrl}
        className="card-img-top"
        alt={game.title}
        style={{ objectFit: 'cover', height: '300px' }} // restrict image height
      />

      {/* Info section on bottom */}
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text mb-1">
          <strong>Genre:</strong> {game.genre}
        </p>
        <p className="card-text mb-1">
          <strong>Platform:</strong> {game.platform}
        </p>
        <p className="card-text mb-1">
          <strong>Release Date:</strong> {game.releaseDate}
        </p>
        <p className="card-text">
          <strong>Rating:</strong> {game.rating}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
