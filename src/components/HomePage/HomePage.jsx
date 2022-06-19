import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '53cd46930a5f93ca31acedee3ad67268';
  const [popularFilms, setPopularFilms] = useState([]);
};
