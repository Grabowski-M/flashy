import styles from './Layout.module.scss';

type LayoutProps = { children: React.ReactNode }

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.layout}>
    {children}
  </div>
)
