import { useForm } from 'react-hook-form';

import styles from './NewQuestion.module.scss';

export const NewQuestion = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className={styles.formPart}>
          <p className={styles.label}>Question</p>
          <textarea {...register('question', { required: true })}/>
          {errors.question && (
            <p>You must fill the question field to submit the question</p>
          )}
        </div>

        <div className={styles.formPart}>
          <p className={styles.label}>Answer</p>
          <textarea {...register('answer', { required: true })}/>
          {errors.answer && (
            <p>You must fill the answer field to submit the question</p>
          )}
        </div>
        <button className={styles.submitButton} type="submit">submit</button>
      </form>
    </div>
  )
}
