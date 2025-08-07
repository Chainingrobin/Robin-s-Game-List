type Props = {
  query: string;
  onChange: (text: string) => void;
  totalGames: number;
};

const SearchBar = ({ query, onChange, totalGames }: Props) => {
  return (
    <input
      type="text"
      className="custom-search-bar"
      placeholder={`Search ${totalGames.toLocaleString()} games...`}
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
