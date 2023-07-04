import { useEffect, useState } from 'react';
import { Form } from './Form.jsx';
import { TodoList } from './TodoList.jsx';

import './styles.css'

export default function App() {
  const [todos, setTodos] = useState(() => {
    // Persistant data through local storage
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);



  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    });
  }


  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id != id));
  }

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
    </>
  );
}