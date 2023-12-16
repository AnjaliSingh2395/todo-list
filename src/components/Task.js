// Task.js
import React from 'react';

const Task = ({ task, onRemove, onToggleComplete }) => {
  return (
    <li className={`shadow appearance-none border rounded w-full py-1 px-3 mr-4 text-grey-darker ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <div className="task-actions">
        <button className="flex-no-shrink p-1 border-2 rounded-md bg-green-300 px-2 text-white font-semibold border-teal hover:text-green-600 hover:bg-teal" onClick={onToggleComplete}>
        {task.completed ? 'Done' : 'Pending'}
        </button>
        <button className="flex-no-shrink p-1 border-2 rounded-md bg-red-300 px-2 text-white font-semibold border-teal hover:text-red-700 hover:bg-teal" onClick={onRemove}>Remove</button>
      </div>
    </li>
  );
};

export default Task;
