
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{movie.Title}</h3>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

