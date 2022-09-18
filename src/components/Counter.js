import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const amount = useSelector((state) => state.counterReducer.value);
  return (
    <div>
      <h2>{amount}</h2>
    </div>
  );
};

export default Counter;
