import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const FILTERS = {
  all: () => true,
  completed: task => task.completed,
  incomplete: task => !task.completed,
};

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('todo_tasks');
    return stored ? JSON.parse(stored) : [];
  });
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!text.trim()) {
      alert('Please enter a valid task');
      return;
    }
    const newTask = { id: Date.now(), text: text.trim(), completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const handleToggle = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filtered = tasks.filter(FILTERS[filter]);
  const sorted = filtered.sort((a, b) =>
    sort === 'asc'
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text)
  );

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter task..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex justify-between mb-4 text-sm">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      <ul className="space-y-2">
        {sorted.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks found.</p>
        ) : (
          sorted.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={() => handleToggle(task.id)}
              onDelete={() => handleDelete(task.id)}
            />
          ))
        )}
      </ul>
    </div>
  );
}
