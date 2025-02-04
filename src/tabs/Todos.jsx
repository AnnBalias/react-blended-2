import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const todos = [
  { id: 1, text: 'Practice more' },
  { id: 2, text: 'Get all tasks done on time' }
];

const Todos = () => {

  const addNewTodo = text => {
    console.log(text);
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
