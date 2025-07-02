import React, { useEffect, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
import { toast } from "react-toastify";
const CreateTask = ({ boardId, onClose, fetchTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    stage: "TODO",
  });
  const { createTask } = useBoards();
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const task = await createTask(boardId, newTask);
      toast.success("Task created successfully !");
      fetchTask();
      onClose();
    } catch (error) {
      toast.error("Error while creating the Task");
    }
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow mt-4">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleAddTask} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
        <select
          value={newTask.stage}
          onChange={(e) => setNewTask({ ...newTask, stage: e.target.value })}
          className="w-full border rounded px-3 py-2"
        >
          <option>TODO</option>
          <option>IN_PROGRESS</option>
          <option>Done</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
