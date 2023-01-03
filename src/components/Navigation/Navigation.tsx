import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';
import { ROUTES_PATHS } from '../../routes/paths';

const NAVIGATION_CONFIG = [
  { to: ROUTES_PATHS.QUESTIONS, text: 'questions' },
  { to: ROUTES_PATHS.NEW_QUESTION, text: 'new question' },
  { to: ROUTES_PATHS.IMPORT, text: 'import questions' }
]

export const Navigation = (): JSX.Element => (
  <nav>
    <ul className={styles.list}>
      {NAVIGATION_CONFIG.map(navItem => (
        <li key={navItem.to}>
          <NavLink
            to={navItem.to}
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            {navItem.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
