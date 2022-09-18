import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../store/text/textSlice';

const InputText = () => {
  const text = useSelector((state) => state.textReducer.text);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type='text'
        placeholder='Enter a text'
        value={text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
    </div>
  );
};

export default InputText;
