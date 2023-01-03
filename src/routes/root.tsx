import { App } from '../App';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { ROUTES_PATHS } from './paths';

export const root = {
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: ROUTES_PATHS.QUESTIONS,
      element: <div>questions</div>
    },
    {
      path: ROUTES_PATHS.NEW_QUESTION,
      element: <div>new question</div>
    },
    {
      path: ROUTES_PATHS.IMPORT,
      element: <div>import</div>
    }
  ]
}
