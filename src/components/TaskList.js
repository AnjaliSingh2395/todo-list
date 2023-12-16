// TaskList.js
import React, { useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TaskList = ({ tasks, setTasks }) => {
  useEffect(() => {
    const fetchTasksFromApi = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      fetchTasksFromApi();
    }
  }, [setTasks]);

  const handleRemoveTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleToggleComplete = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const saveTasksToLocalStorage = updatedTasks => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onRemove={() => handleRemoveTask(task.id)}
          onToggleComplete={() => handleToggleComplete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
