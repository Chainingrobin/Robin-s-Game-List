import React from 'react';
import type { Genre } from '../types/Genre'; // Update path if needed

interface SidebarProps {
  genres: Genre[];
  onGenreSelect: (genre: Genre | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ genres, onGenreSelect }) => {
  return (
    <div className='sidebar-container'>
      {/* Section Title */}
      <div className="mb-4 ">
        <h3 className='all-games-header'>Genres</h3>
      </div>

      {/* Genre Buttons */}
      <div className="genre-button d-flex flex-column gap-2">
        <button
          
          onClick={() => onGenreSelect(null)}
        >
          All Games
        </button>

        {genres.map((genre) => (
          <button
            key={genre.slug}
            className="genre-button"
            onClick={() => onGenreSelect(genre)}
          >
            {genre.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
