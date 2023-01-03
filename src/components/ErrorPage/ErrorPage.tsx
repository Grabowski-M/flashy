import { useRouteError } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as { statusText?: string, message?: string };

  return (
    <div>
      {`Error: ${error.statusText || error.message}`}
    </div>
  )
}
