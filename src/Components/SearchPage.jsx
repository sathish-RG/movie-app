
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../api';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [type, setType] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['movies', searchTerm, page, type],
    queryFn: () => searchMovies(searchTerm, page, type),
    enabled: !!searchTerm
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setPage(1);
  };

  return (
    <div className="container mx-auto px-4 mt-2">
      <SearchBar onSearch={handleSearch} />
      <div className="mb-4">
        <label htmlFor="type" className="mr-2">Filter by type:</label>
        <select
          id="type"
          value={type}
          onChange={handleTypeChange}
          className="border rounded p-1"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error: {error.message}</p>}
      {data && data.Error && <p className="text-center text-red-500">{data.Error}</p>}
      {data && data.Search && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.Search.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalResults={parseInt(data.totalResults)}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;

