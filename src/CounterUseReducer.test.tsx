import { render, fireEvent } from '@testing-library/react';
import CounterUseReducer from './CounterUseReducer';

describe('CounterUseReducer Component', () => {
  it('renders initial count correctly', () => {
    const { getByTestId } = render(<CounterUseReducer initialCount={10} />);
    expect(getByTestId('count-label-usereducer').textContent).toBe('Count: 10');
  });

  it('increments count when button is clicked', () => {
    const { getByTestId } = render(<CounterUseReducer initialCount={0} />);
    const incrementButton = getByTestId('increment-button-usereducer');
    fireEvent.click(incrementButton);
    expect(getByTestId('count-label-usereducer').textContent).toBe('Count: 1');
    fireEvent.click(incrementButton);
    expect(getByTestId('count-label-usereducer').textContent).toBe('Count: 2');
  });
});