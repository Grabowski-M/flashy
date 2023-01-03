import { Outlet } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

export const App = (): JSX.Element => (
  <Layout>
    <Outlet />
  </Layout>
)
