import { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, updateTask }) => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (updateTask) {
      setId(updateTask.id);
      setTitle(updateTask.title);
      setDescription(updateTask.description);
      setFavorite(updateTask.favorite);
     
    } else {
      setId(null);
      setTitle("");
      setDescription("");
      setFavorite(false);
    }
  }, [updateTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Ingrese un titulo");
      return;
    }

    if (!description.trim()) {
      alert("Ingrese una descripción");
      return;
    }

    const task = {
      title,
      description,
      favorite,
    };

    if (id === null) {
      addTask(task);
    } else {
      editTask(task, id);
    }

    setTitle("");
    setDescription("");
    setFavorite(false);

  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "favorite") {
      setFavorite(e.target.checked);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titulo de la Tarea:
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          autoFocus
        />
      </label>

      <label>
        Descripción de la Tarea:
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>

      <label>
        Favorita:
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Guardar" />
    </form>
  );
};

export default TaskForm;
