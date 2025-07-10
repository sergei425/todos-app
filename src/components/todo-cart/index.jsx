import { useTodos } from "../../TodoProvider";
import { ImBin2, ImPencil } from "react-icons/im";
import './style.scss'

export default function TodoCart({ id, title, description, completed, getId }) {
  const { removeTodo, updateTodo, completedTodo } = useTodos();

  const takeId = (id) => {
    updateTodo(id)
    getId(id)
  }

  const checkedHandler = () => {
    completedTodo(id)
  }

  return (
    <section className="todo">
      <div className="todo__button-wrap">
        <input type="checkbox"  onChange={checkedHandler} checked={completed}/>
        <button onClick={() => removeTodo(id)}>
        <ImBin2/>
      </button>
      <button onClick={() => takeId(id)}>
        <ImPencil/>
      </button>
      </div>
      <div className="todo__wrap">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

