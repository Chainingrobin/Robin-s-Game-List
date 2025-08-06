// components/SearchBar.tsx
type Props = {
  query: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ query, onChange }: Props) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search games..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
