import React from 'react';
import GenreButton from './GenreButton';

const Sidebar: React.FC = () => {
  // Array of genres with associated colors
  const genres = [
    { label: 'JRPG', color: 'danger' },
    { label: 'Action RPG', color: 'primary' },
    { label: 'Puzzle', color: 'warning' },
    { label: 'Shooter', color: 'success' },
  ];

  return (
    <div className="bg-dark text-light p-3" style={{ width: '250px', minHeight: '100vh' }}>
      {/* Future search bar placeholder */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search (coming soon)"
          disabled
        />
      </div>

      {/* Genre Buttons */}
      <div className="d-flex flex-column gap-2">
        {genres.map(({ label, color }, index) => (
          <GenreButton key={index} label={label} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
