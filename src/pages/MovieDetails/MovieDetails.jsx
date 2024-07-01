// src/pages/MovieDetails/MovieDetails.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Link to="/movies" className={styles.goBack}>
        Go back
      </Link>
      <div className={styles.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={styles.userScore}>
            User Score: {movie.vote_average * 10}%
          </p>
          <h3>Overview</h3>
          <p className={styles.overview}>{movie.overview}</p>
          <h3>Genres</h3>
          <p className={styles.genres}>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
