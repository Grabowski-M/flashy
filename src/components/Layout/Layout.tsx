import styles from './Layout.module.scss';
import { Navigation } from '../Navigation/Navigation';

type LayoutProps = { children: React.ReactNode }

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.layout}>
    <Navigation />
    <div className={styles.content}>
      {children}
    </div>
  </div>
)
