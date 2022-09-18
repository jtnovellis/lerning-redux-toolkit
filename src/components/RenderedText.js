import React from 'react';
import { useSelector } from 'react-redux';

const RenderedText = () => {
  const user = useSelector((state) => state.textReducer.text);
  return (
    <div>
      <h3>{user}</h3>
    </div>
  );
};

export default RenderedText;
