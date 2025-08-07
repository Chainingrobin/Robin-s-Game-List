import React from 'react';

interface GenreButtonProps {
  label: string;
  onClick?: () => void;
}

const GenreButton: React.FC<GenreButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GenreButton;
