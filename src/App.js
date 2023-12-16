// App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = newTask => {
    setTasks([...tasks, newTask]);
    saveTasksToLocalStorage([...tasks, newTask]);
  };

  const saveTasksToLocalStorage = updatedTasks => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    
    <div className='bg-slate-300'>
      <div>
        <div className="App bg-white">
          <h1 className="font-bold text-3xl text-center py-6 text-red-500">To-Do List Application</h1>
          <TaskInput onAddTask={handleAddTask} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
