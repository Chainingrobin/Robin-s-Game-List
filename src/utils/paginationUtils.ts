// Show first page, last page, current page ±1, and ellipses where needed
export function getVisiblePageNumbers(
  currentPage: number,
  totalPages: number
): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  // Always show the first page
  pages.push(1);

  // Determine when to show ellipsis after the first page
  if (currentPage > 3) {
    pages.push('ellipsis');
  }

  // Show pages around the current page (±1)
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }

  // Determine when to show ellipsis before the last page
  if (currentPage < totalPages - 2) {
    pages.push('ellipsis');
  }

  // Always show the last page if it's not the same as the first
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}
