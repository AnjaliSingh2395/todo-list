// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObject = {
      userId: 1,
      id: new Date().getTime(),
      title: newTask,
      completed: false,
    };

    onAddTask(newTaskObject);
    setNewTask('');
  };

  return (
    <div className="task-input-container">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="flex-no-shrink p-2 border-2 rounded-md bg-blue-500 text-white font-semibold border-teal hover:text-blue-700 hover:bg-teal" onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;
