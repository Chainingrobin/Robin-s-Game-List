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

  // Get pages to show (e.g., [1, 'ellipsis', 4, 5, 6, 'ellipsis', 15])
  const visiblePages = getVisiblePageNumbers(currentPage, totalPages);

  return (
    <div className="mt-4 text-center">
      <nav>
        <ul className="pagination justify-content-center mb-2">
          
          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
              Previous
            </button>
          </li>

          {/* Page Buttons */}
          {visiblePages.map((page, index) => {
            if (page === 'ellipsis') {
              // If page is 'ellipsis', render non-clickable item
              return (
                <li key={`ellipsis-${index}`} className="page-item disabled">
                  <span className="page-link text-white bg-transparent border-0">…</span>
                </li>
              );
            }

            // Render clickable page number button
            return (
              <li
                key={page}
                className={`page-item ${currentPage === page ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next Button */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* Results Text */}
      <div className="text-white small">
        Showing <strong>{resultsRange.start}</strong>–<strong>{resultsRange.end}</strong> of <strong>{resultsRange.total}</strong> results
      </div>
    </div>
  );
};

export default Pagination;
