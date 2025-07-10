import Todo from "../todo-cart";
import { useTodos } from "../../TodoProvider";
import './style.scss'
import Title from "../title";
import { useState } from "react";

export default function TodoList({ getId }) {
  const [isCompleted, setIsCompleted] = useState('uncompleted')
  const { todos } = useTodos();
  const todosUnCompleted = todos.filter((todo) => !todo.completed)
  const todosCompleted = todos.filter((todo) => todo.completed)

  if (todos.length === 0) {
    return <div className="no-todos">No Todos Listed. (Add a Todo)</div>;
  }

  return (
    <div className="todos__wrap">
      {isCompleted === 'uncompleted' && <>
      {todosCompleted.length >= 1 && <button onClick={() => setIsCompleted('completed')} className="completed-toggle">Completed todos</button>}
      <Title name={'uncompleted-title'} caption={'Uncompleted Todos'} />
      <div className="todo-list">
        {todosUnCompleted.map(todo => (
          <Todo key={todo.id} {...todo} getId={getId} />
        ))}
      </div>
      </>}
      {isCompleted === 'completed' && <>
        {todosUnCompleted.length >= 1 && <button onClick={() => setIsCompleted('uncompleted')} className="completed-toggle">Uncompleted todos</button>}
        <Title name={'completed-title'} caption={'Completed Todos'} />
        <div className="todo-list">
         {todosCompleted.map(todo => (
           <Todo key={todo.id} {...todo} getId={getId} />
         ))}
       </div>
      </>}
    </div>
  )
}






