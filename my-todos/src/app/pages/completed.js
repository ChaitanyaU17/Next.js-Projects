import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setCompletedTasks(storedTasks.filter(task => task.isComplete));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <Link href="/">Back to To-Do List</Link>
    </div>
  );
}
