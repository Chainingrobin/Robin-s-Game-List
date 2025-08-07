export function formatDate(dateString: string): string {
  if (!dateString) return 'N/A';

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short', // "Jan", "Feb", etc.
    day: 'numeric', // "1", "2", etc.
    year: 'numeric', // "2025"
  }).format(date);
}
