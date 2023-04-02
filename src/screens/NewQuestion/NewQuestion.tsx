import { useForm } from 'react-hook-form';

import styles from './NewQuestion.module.scss';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { useStateValue } from '../../hooks/useStateValue';

interface FormValues {
  question: string;
  answer: string;
}

export const NewQuestion = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { dispatch } = useStateValue();

  const submit = (data: { question: string; answer: string }): void => {
    dispatch({
      type: 'ADD_QUESTION',
      payload: data,
    })
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.formPart}>
          <p className={styles.label}>Question</p>
          <textarea {...register('question', { required: true })}/>
          {errors.answer && (
            <ErrorMessage message="You must fill the question field to submit the question"/>
          )}
        </div>

        <div className={styles.formPart}>
          <p className={styles.label}>Answer</p>
          <textarea {...register('answer', { required: true })}/>
          {errors.answer && (
            <ErrorMessage message="You must fill the answer field to submit the question"/>
          )}
        </div>
        <button className={styles.submitButton} type="submit">submit</button>
      </form>
    </div>
  )
}
