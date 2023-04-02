import styles from './Questions.module.scss';
import { useStateValue } from '../../hooks/useStateValue';
import { SingleQuestion } from '../../components/Question/Question';

export const Questions = (): JSX.Element => {
  const { state: { questions } } = useStateValue();

  return (
    <div className={styles.questionsWrapper}>
      {questions.map(question => (
        <SingleQuestion key={question.question} question={question}/>
      ))}
    </div>
  )
}
