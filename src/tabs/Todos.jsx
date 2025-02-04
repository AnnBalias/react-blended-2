import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

const tod = [
  { id: 1, text: 'Practice more' },
  { id: 2, text: 'Get all tasks done on time' }
];

const Todos = () => {

  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  })
   
  const addNewTodo = input => {
    setTodos((prev) => [...prev, {
      id: nanoid(),
      text: input,
    }])
  };

  const delTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} delTodo={delTodo} />
    </>
  );
};

export default Todos;

