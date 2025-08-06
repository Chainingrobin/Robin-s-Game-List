import React from 'react';

interface Genre {
  label: string;
  slug: string;
  color: string;
}

interface SidebarProps {
  genres: Genre[];
  onGenreSelect: (slug: string) => void;
}

// Utility to determine text color based on Bootstrap background class
const getTextColor = (bgColor: string): string => {
  const lightBackgrounds = ['warning', 'light', 'info'];
  return lightBackgrounds.includes(bgColor) ? 'text-dark' : 'text-white';
};

const Sidebar: React.FC<SidebarProps> = ({ genres, onGenreSelect }) => {
  return (
    <div>
      {/* Section Title */}
      <div className="mb-4">
        <h5 className="text-light">Genres</h5>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-light text-dark" onClick={() => onGenreSelect('')}>
          All Games
        </button>

        {genres.map((genre) => (
          <button
            key={genre.label}
            className={`btn btn-${genre.color} ${getTextColor(genre.color)}`}
            onClick={() => onGenreSelect(genre.slug)}
          >
            {genre.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
