import { useState, useEffect } from 'react';
import styles from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = ({ movieId }) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '53cd46930a5f93ca31acedee3ad67268';
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w138_and_h175_face';
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(actorsRes => {
        return setActors(actorsRes.cast);
      })

      .catch(error => alert(error.message));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={styles.list}>
          {actors.map(
            actor =>
              actor.profile_path && (
                <li key={actor.id} className={styles.item}>
                  <img
                    className={styles.img}
                    src={`${IMAGE_URL}${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <div>
                    <h3>Actor name: {actor.original_name}</h3>
                    <p>Role: {actor.character}</p>
                  </div>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
