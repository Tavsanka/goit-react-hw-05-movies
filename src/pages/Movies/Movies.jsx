import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import styles from "./Movies.module.scss";
import Loader from "../../components/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // Stan dla wskaźnika ładowania
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true); // Ustawienie stanu ładowania na true przed rozpoczęciem pobierania danych
      try {
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false); // Ustawienie stanu ładowania na false po zakończeniu pobierania danych
      }
    };

    fetchData();
  }, [query]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/goit-react-hw-05-movies/movies/${movieId}`);
  };

  return (
    <div className={styles.container}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {loading ? (
        <Loader /> // Wyświetlenie wskaźnika ładowania podczas pobierania danych
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default Movies;
