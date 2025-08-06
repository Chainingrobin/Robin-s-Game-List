import React from 'react';

interface Genre {
  label: string;
  color: string;
}

interface SidebarProps {
  genres: Genre[];
  onGenreSelect: (genre: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ genres, onGenreSelect }) => {
  return (
    <div>
      <div className="mb-4">
        <h5 className="text-light">Genres</h5>
      </div>
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-light" onClick={() => onGenreSelect('')}>
          All Games
        </button>
        {genres.map((genre) => (
          <button
            key={genre.label}
            className={`btn btn-outline-${genre.color}`}
            onClick={() => onGenreSelect(genre.label)}
          >
            {genre.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
