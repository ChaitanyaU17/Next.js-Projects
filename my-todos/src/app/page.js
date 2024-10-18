// src/app/page.js
"use client";
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import styles from './styles/Home.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API when the page loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks');
        if (!res.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData = await res.json();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, []);
  

  // Add new task by calling the API
  const addTask = async (taskName) => {
    const newTask = { id: Date.now(), name: taskName, isComplete: false };
    setTasks([...tasks, newTask]);

    await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
  };

  // Delete task by calling the API
  const deleteTask = async (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));

    await fetch('/api/tasks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId }),
    });
  };

  // Mark task as complete by calling the API
  const completeTask = async (taskId) => {
    setTasks(
      tasks.map(task => task.id === taskId ? { ...task, isComplete: true } : task)
    );

    await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: taskId }),
    });
  };

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
}
