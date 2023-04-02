import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => (
  <p className={styles.errorMessage}>
    {message}
  </p>
)
