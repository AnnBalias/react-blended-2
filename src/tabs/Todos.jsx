import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';

const Todos = () => {

  const addNewTodo = text => {
    console.log(text);
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
    </>
  );
};

export default Todos;
