import TasksCard from "./TasksCard";

const TasksList = ({ tasks, deleteTask, editTask, favoriteTask, setUpdateTask }) => {
  return (
    <div>
      {
        tasks.length === 0 
        ? 
        (<h2>No hay tareas registradas</h2>) 
        : 
        (
          <>
          <h2>Lista de tareas</h2>
          <div className="tasks-list">
          {
          tasks.map((task) => (
            <TasksCard
              task={task}
              key={task.id}
              deleteTask={deleteTask}
              editTask={editTask}
              setUpdateTask={setUpdateTask}
              favoriteTask={favoriteTask}
            />
          ))
          }
          </div>
          </>
        )
      }
    </div>
  );
};

export default TasksList;
