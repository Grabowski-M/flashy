import { createContext, useReducer } from 'react';
import { Action, reducer, State } from './reducer';

const initialState = {
  questions: [],
}

export const StateContext = createContext<{ state: State, dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => initialState
});

type StateProviderProps = { children: React.ReactNode }

export const StateProvider = ({ children }: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
