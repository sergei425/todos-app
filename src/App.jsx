import TodoList from "./components/todo-list";
import Form from "./components/form";
import { useState } from 'react';
import './App.scss'

export default function App() {
  const [id, setId] = useState(null)

  return (
    <div className="app-wrapper">
      <h1>Todos</h1>
      <TodoList getId={setId}/>
      <hr />
      <Form todoId={id} getId={setId}/>
    </div>
  );
}
