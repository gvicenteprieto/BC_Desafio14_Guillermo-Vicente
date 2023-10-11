const TasksCard = ({ task, deleteTask, favoriteTask, setUpdateTask }) => {
  return (
    <div className="tasks-card" key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <h5>{task.favorite ? "❤️ Tarea Favorita" : ""}</h5>
      <div className="btns-container">
      <button className="btn-edit" onClick={()=>setUpdateTask(task)} >Editar</button>
      <button className="btn-fav" onClick={()=>favoriteTask(task.id)}>💚</button>
      <button className="btn-delete" onClick={()=>deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default TasksCard;
