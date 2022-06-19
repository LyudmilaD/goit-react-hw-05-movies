import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={navLink =>
          navLink.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={navLink =>
          navLink.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
