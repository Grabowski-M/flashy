import { render, fireEvent, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewQuestion } from './NewQuestion';
import { useStateValue } from '../../hooks/useStateValue';
import { State } from '../../state/reducer';

const TEST_QUESTION = 'TEST_QUESTION';
const TEST_ANSWER = 'TEST_ANSWER';

jest.mock('../../hooks/useStateValue');

describe('NewQuestion', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    const mockedUseStateValue = useStateValue as jest.MockedFunction<typeof useStateValue>
    mockedUseStateValue.mockImplementation(() => ({
      state: {} as State,
      dispatch: dispatchMock,
    }))
  })

  test('submits form with proper values', async () => {
    const { container } = render(<NewQuestion/>);

    const questionTextarea = await container.querySelector('textarea[name="question"]')!
    act(() => {
      fireEvent.change(questionTextarea, { target: { value: TEST_QUESTION } });
    })

    const answerTextarea = await container.querySelector('textarea[name="answer"]')!
    act(() => {
      fireEvent.change(answerTextarea, { target: { value: TEST_ANSWER } });
    })

    await act(async () => {
      userEvent.click(await screen.findByText('submit'));
    })

    await expect(dispatchMock).toHaveBeenCalled()
  })

  test('displays error message when the field is empty', async () => {
    const { container } = render(<NewQuestion/>);

    const questionTextarea = await container.querySelector('textarea[name="question"]')!
    act(() => {
      fireEvent.change(questionTextarea, { target: { value: TEST_QUESTION } });
    })

    await act(async () => {
      userEvent.click(await screen.findByText('submit'));
    })

    const errorMessageElement = await screen.findByText('You must fill the answer field to submit the question')
    await expect(errorMessageElement).toBeInTheDocument();
    await expect(dispatchMock).not.toHaveBeenCalled()
  })

})
