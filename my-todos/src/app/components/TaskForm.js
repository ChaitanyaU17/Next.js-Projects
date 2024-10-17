import { useState } from 'react';
import Link from 'next/link';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Link href="/completed">View Completed Tasks</Link>
      <input
        type="text"
        placeholder="Add new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
