import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
        className="border rounded p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

