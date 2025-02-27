import React, { useState } from 'react';

interface CounterUseStateProps {
  initialCount: number;
}

const CounterUseState: React.FC<CounterUseStateProps> = ({ initialCount }) => {
  // Use useState to manage the counter state
  const [count, setCount] = useState(initialCount);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <label data-testid="count-label-usestate">Count: {count}</label>
      <button data-testid="increment-button-usestate" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default CounterUseState;
