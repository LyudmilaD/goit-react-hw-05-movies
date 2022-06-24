import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styles from './App.module.css';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage.jsx')
);
const Navigation = lazy(() => import('./Navigation/Navigation'));

export const App = () => {
  return (
    <div className={styles.App}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};
