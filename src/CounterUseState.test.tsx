import { render, fireEvent } from '@testing-library/react';
import CounterUseState from './CounterUseState';

describe('CounterUseState Component', () => {
  it('renders initial count correctly', () => {
    const { getByTestId } = render(<CounterUseState initialCount={5} />);
    expect(getByTestId('count-label-usestate').textContent).toBe('Count: 5');
  });

  it('increments count when button is clicked', () => {
    const { getByTestId } = render(<CounterUseState initialCount={0} />);
    const incrementButton = getByTestId('increment-button-usestate');
    fireEvent.click(incrementButton);
    expect(getByTestId('count-label-usestate').textContent).toBe('Count: 1');
    fireEvent.click(incrementButton);
    expect(getByTestId('count-label-usestate').textContent).toBe('Count: 2');
  });
});
