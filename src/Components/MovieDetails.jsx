
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Search</Link>
      {movie && (
        <div className="flex flex-col md:flex-row gap-8">
          <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded-lg shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-600 mb-4">{movie.Year} | {movie.Runtime} | {movie.Genre}</p>
            <p className="mb-4">{movie.Plot}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writers:</strong> {movie.Writer}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

