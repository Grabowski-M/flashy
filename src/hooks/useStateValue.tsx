import { useContext } from 'react';
import { StateContext } from '../state/StateContext';

export const useStateValue = () => {
  const { state, dispatch } = useContext(StateContext);

  return { state, dispatch }
}
