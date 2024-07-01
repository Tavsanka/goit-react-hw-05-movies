import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import styles from "./Cast.module.scss";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(setCast)
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={styles.castImage}
          />
          <p className={styles.name}>{actor.name}</p>
          <p className={styles.character}>
            Character:{" "}
            <span className={styles.characterName}>{actor.character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
