import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loading, getPosts, errors } from '../store/posts/postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const load = useSelector((state) => state.postsReducer.loading);
  const errorData = useSelector((state) => state.postsReducer.error);
  useEffect(() => {
    dispatch(loading(true));
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((data) => dispatch(getPosts(data)))
      .catch((error) => dispatch(errors(error)));
    dispatch(loading(false));
  }, [dispatch]);
  console.log(load);
  if (errorData) {
    return <p>Ups! ocurrió un error. Error: {errorData}</p>;
  }
  return (
    <div>
      {load ? (
        <p>loading...</p>
      ) : (
        posts.map(({ title, id }) => (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
