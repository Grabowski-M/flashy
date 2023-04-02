export interface Question {
  question: string;
  answer: string;
}

export interface State {
  questions: Question[];
}

export type Action = | {
  type: 'ADD_QUESTION';
  payload: {
    question: string;
    answer: string;
  };
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_QUESTION': {
      const newState = { ...state, questions: [...state.questions, action.payload] }
      console.log({ action, newState });

      return newState;
    }
    default:
      return state;
  }
};
