import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/counter/counterSlice';

const Button = ({ children }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (children === 'Increment') {
      dispatch(increment());
    }
    if (children === 'Decrement') {
      dispatch(decrement());
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default Button;
