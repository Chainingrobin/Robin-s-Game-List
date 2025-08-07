import type { Game } from '../types/Game';
import { useEffect, useRef } from 'react';
import { mapSlugsToIcons } from '../utils/platformIconMapper';
import { formatDate } from '../utils/formatDate';
import { applyTiltEffect } from '../utils/tiltEffects';
import '../styles/customstyle.css';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const cleanup = applyTiltEffect(cardRef.current);
    return cleanup;
  }, []);

  const platformSlugs = game.parent_platforms?.map(p => p.platform.slug) || [];
  const platformIcons = mapSlugsToIcons(platformSlugs);

  return (
    <div className="custom-game-card-wrapper">
      <div ref={cardRef} className="custom-game-card">
        <div className="game-card-image-wrapper">
          <img
            src={game.background_image || 'https://via.placeholder.com/300x200'}
            className="game-card-image"
            alt={game.name}
            loading="lazy"
            decoding="async"
            width={300}
            height={200}
          />

        </div>

        <div className="card-body d-flex flex-column justify-content-between p-3">
          <h5 className="card-title">{game.name}</h5>

          <p className="card-text mb-1">
            <strong>Genres:</strong>{' '}
            {game.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
          </p>

          <div className="d-flex flex-wrap gap-2 align-items-center mb-1">
            <strong className="me-2">Platforms:</strong>
            {platformIcons.length > 0 ? (
              platformIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="Platform"
                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                />
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>

          <p className="card-text mb-1">
            <strong>Release Date:</strong> {formatDate(game.released)}
          </p>

          <p className="card-text mb-1">
            <strong>Rating:</strong> {game.rating?.toFixed(1) || 'N/A'} ⭐
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
