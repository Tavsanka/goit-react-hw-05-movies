// src/components/MovieItem/MovieItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieItem.module.scss";

const MovieItem = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null; // Brak placeholdera

  return (
    <li className={styles.movieItem}>
      {posterUrl && <img src={posterUrl} alt={`${movie.title} poster`} />}
      <p>{movie.title}</p>
      <Link to={`/movies/${movie.id}`}>More details</Link>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
