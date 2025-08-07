// components/GameCardSkeleton.tsx
import React from 'react';

const GameCardSkeleton: React.FC = () => {
  return (
    <div className="game-card skeleton">
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-info" />
    </div>
  );
};

export default GameCardSkeleton;
