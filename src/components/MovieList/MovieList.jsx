import React from "react";
import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
