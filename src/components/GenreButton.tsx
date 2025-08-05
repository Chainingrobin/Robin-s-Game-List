import React, { type ReactNode } from 'react';

interface GenreButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'| ReactNode;
}

const GenreButton: React.FC<GenreButtonProps> = ({ label, onClick, color = 'light' }) => {
  return (
    <button
      className={`btn btn-outline-${color} mb-2 text-start w-100`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GenreButton;
