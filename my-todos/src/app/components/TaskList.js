

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => completeTask(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
