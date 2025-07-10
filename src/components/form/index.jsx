import { useState, useEffect } from "react";
import { useTodos } from "../../TodoProvider";
import "./style.scss";

export default function Form({ todoId, completed,  getId, isReset }) {
  const { addTodo, updateTodo, todos } = useTodos();

  const todo = todos.find((el) => Object.is(el.id, todoId));

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  if (isReset) {
    formReset()
  }

  useEffect(() => {
    const getService = () => {
      if (todo) {
        const { title, description } = todo;
        setFormData({ ...formData, title, description });
      }
    };

    getService();
  }, [todo]);

  function fieldChangeHandle(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    if (todo) {
      updateTodo({ todoId, completed,...formData });
    } else {
      addTodo(formData);
    }

    formReset();
  };

  const formReset = () => {
    setFormData({
      ...formData,
      title: "",
      description: "",
    });
    getId(0);
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        <input
          type="text"
          name="title"
          placeholder="todo title..."
          onChange={fieldChangeHandle}
          value={formData.title || ""}
        />
      </label>
      <label>
        <textarea
          placeholder="todo description..."
          name="description"
          onChange={fieldChangeHandle}
          value={formData.description || ""}
        />
      </label>
      <button className="form__btn">ADD TODO</button>
    </form>
  );
}
