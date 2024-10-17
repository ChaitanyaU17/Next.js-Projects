import { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, isComplete: false };
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Mark task as complete
  const completeTask = (taskId) => {
    setTasks(
      tasks.map(task => task.id === taskId ? { ...task, isComplete: true } : task)
    );
  };

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}
