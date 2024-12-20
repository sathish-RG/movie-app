const API_KEY = '4ec3221c'; // Replace with your actual OMDB API key
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, type = '') => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

