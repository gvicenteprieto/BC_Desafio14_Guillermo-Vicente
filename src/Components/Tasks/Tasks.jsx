import { useEffect, useState } from "react";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";

const tasksData = [
  {
    id: 1,
    title: "Tarea Ejemplo",
    description: "Tarea de ejemplo; puede editarla o eliminarla. Puede seleccionarla como favorita",
    favorite: false,
  },
];

const Task = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [updateTask, setUpdateTask] = useState(null);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (task, id) => {
    const editedTask = tasks.map((t) => (t.id === id ? task : t));
    setTasks(editedTask);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const favoriteTask = (id) => {
    const favoriteTasks = tasks.map((task) =>
      task.id === id ? { ...task, favorite: !task.favorite } : task
    );
    setTasks(favoriteTasks);
  };

  return (
    <main className="Main">
      <header className="header">
        <h3>Formulario de Tareas</h3>
      </header>
      <TasksForm
        addTask={addTask}
        editTask={editTask}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
      />
      <TasksList
        tasks={tasks}
        setUpdateTask={setUpdateTask}
        editTask={editTask}
        deleteTask={deleteTask}
        favoriteTask={favoriteTask}
      />
    </main>
  );
};

export default Task;
