import { App } from '../App';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { ROUTES_PATHS } from './paths';
import { NewQuestion } from '../screens/NewQuestion/NewQuestion';
import { Questions } from '../screens/Questions/Questions';

export const root = {
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: ROUTES_PATHS.QUESTIONS,
      element: <Questions/>
    },
    {
      path: ROUTES_PATHS.NEW_QUESTION,
      element: <NewQuestion/>
    },
    {
      path: ROUTES_PATHS.IMPORT,
      element: <div>import</div>
    }
  ]
}
