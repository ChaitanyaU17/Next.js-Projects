import { useEffect, useState } from 'react';

export default function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setCompletedTasks(storedTasks.filter(task => task.isComplete));
    }
  }, []);

  return (
    // completed tasks shown here
    <div>
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}