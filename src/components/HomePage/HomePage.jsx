import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '53cd46930a5f93ca31acedee3ad67268';
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(films => {
        return setPopularFilms([
          ...films.results.map(({ id, title, name }) => ({ id, title, name })),
        ]);
      })
      .catch(error => console.log(error.message));
  }, []);
  return (
    <>
      {' '}
      <h2>Popular films</h2>
      <ul>
        {popularFilms.map(({ id, title, name }) => (
          <li key={id} className={styles.filmsItem}>
            <Link className={styles.filmsLink} to={`movies/${id}`}>
              {title ? title : name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
