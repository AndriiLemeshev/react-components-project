import React, { ActionDispatch, useReducer } from 'react';

interface CounterUseReducerProps {
  initialCount: number;
}

interface CounterUseReducerState {
    count: number;
}

// Define the action type
type Action = { type: 'increment' };

// Define the reducer function
const reducer = (state: CounterUseReducerState, action: Action): CounterUseReducerState => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    default:
      return state;
  }
};

// Function to increment the counter
const increment = (dispatch: ActionDispatch<[Action]>) => () => {
  dispatch({ type: 'increment' });
};

const CounterUseReducer: React.FC<CounterUseReducerProps> = ({ initialCount }) => {
  // Use useReducer to manage the counter state
  const [{count}, dispatch] = useReducer(reducer, { count: initialCount });

  return (
    <div>
      <label data-testid="count-label-usereducer">Count: {count}</label>
      <button data-testid="increment-button-usereducer" onClick={increment(dispatch)}>
        Increment
      </button>
    </div>
  );
};

export default CounterUseReducer;
