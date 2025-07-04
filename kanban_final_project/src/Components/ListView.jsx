import React, { useState } from "react";
import TaskList from "./TaskList";

const ListView = ({ tasks, COLUMNS, users }) => {
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchUser = selectedUser === "All" || task.user === selectedUser;
    const matchStage = selectedStage === "All" || task.stage === selectedStage;
    return matchUser && matchStage;
  });

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        {/* User Filter */}
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="border rounded px-3 py-1 text-sm"
        >
          <option value="All">All Users</option>
          {users.map((user) => (
            <option key={user.id} value={user.firstName}>
              {user.firstName}
            </option>
          ))}
        </select>

        {/* Stage Filter */}
        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          className="border rounded px-3 py-1 text-sm"
        >
          <option value="All">All Stages</option>
          {COLUMNS.map((col) => (
            <option key={col.id} value={col.id}>
              {col.title}
            </option>
          ))}
        </select>
      </div>

      {/* Task List */}
      <ul role="list" className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskList
              key={task.id}
              task={task}
              users={users}
              COLUMNS={COLUMNS}
            />
          ))
        ) : (
          <li className="text-gray-500 text-sm">No tasks found.</li>
        )}
      </ul>
    </div>
  );
};

export default ListView;
