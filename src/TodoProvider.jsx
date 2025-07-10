import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { loadState, saveState } from "./localStorage.js";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);
const initialState = loadState()

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(initialState);
  

  const addTodo = ({ title, description }) => {
    setTodos((todos) => [
      ...todos,
      {
        id: uuidv4(),
        title,
        description,
        completed: false
      },
    ]);
  }

  const updateTodo = ({ todoId, title, description }) =>
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, title, description } : todo
      )
    );

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const completedTodo = (todoId) => setTodos(
    todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
  );

  useEffect(() => {
    saveState(todos)
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo, completedTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
