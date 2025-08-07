import React from 'react';
import { getVisiblePageNumbers } from '../utils/paginationUtils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  resultsRange: {
    start: number;
    end: number;
    total: number;
  };
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  resultsRange,
}) => {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePageNumbers(currentPage, totalPages);

  return (
    <div className="mt-4 text-center">
      <nav>
        <ul className="custom-pagination">
          
          {/* Previous Button */}
          <li>
            <button
              className="pagination-button"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {/* Page Buttons */}
          {visiblePages.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <li key={`ellipsis-${index}`}>
                  <span className="pagination-ellipsis">…</span>
                </li>
              );
            }

            return (
              <li key={page}>
                <button
                  className={`pagination-button ${currentPage === page ? 'active-page' : ''}`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next Button */}
          <li>
            <button
              className="pagination-button"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* Results Text */}
      <div className="results-text">
        Showing <strong>{resultsRange.start}</strong>–<strong>{resultsRange.end}</strong> of <strong>{resultsRange.total.toLocaleString()}</strong> results
      </div>
    </div>
  );
};

export default Pagination;
