import React from 'react';

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 border rounded bg-white">
      <div>
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
      </div>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">Delete</button>
    </li>
  );
};

export default TodoItem;
