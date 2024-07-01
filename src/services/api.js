const API_KEY = "9aaa7d4cdaaf1b672ccd044d06cb2b7c";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
};

const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  const data = await response.json();
  return data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
};

const fetchMovieCast = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie cast");
  }
  const data = await response.json();
  return data.cast;
};

const fetchMovieReviews = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie reviews");
  }
  const data = await response.json();
  return data.results;
};

export {
  fetchMovies,
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
