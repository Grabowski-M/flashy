import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Question } from '../../state/reducer'

interface QuestionProps {
  question: Question
}

export const SingleQuestion = ({ question }: QuestionProps): JSX.Element => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card sx={{ minWidth: 275 }} onClick={() => setShowAnswer((prevState) => !prevState)}>
      <CardContent>
        <div>
          {question.question}
        </div>
        {!!showAnswer && (
          <div>
            {question.answer}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
