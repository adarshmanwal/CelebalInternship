import React, { useEffect, useRef, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
import { useParams } from "react-router-dom";
import DropDownButton from "./DropDownButton";
import { FiUsers } from "react-icons/fi";
import { toast } from "react-toastify";

const TaskList = ({ task, COLUMNS, users }) => {
  const [open, setOpen] = useState(null);
  const dropdownRef = useRef(null);
  const { boardId } = useParams();
  const { updateTasksUser } = useBoards();
  const [currentUser, setCurrentUser] = useState(() => {
    return task.user;
  });
  const [currentStage, setCurrentStage] = useState(task.stage);
  const [loading, setLoading] = useState(false);

  const { updateTaskStage } = useBoards();

  const onStageChange = async (newStage) => {
    console.log("Stage changed to:", newStage);
    setLoading(true);
    await updateTaskStage(boardId, task.id, newStage);
    toast.success("Stage Updated Successfully");
    setCurrentStage(newStage);
    setLoading(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUpdateUser = async (id, user) => {
    console.log("Updating user for task:", id, "to user:", user);
    setLoading(true);
    await updateTasksUser(boardId, id, user);
    toast.success("User Updated Successfully");
    setCurrentUser(user);
    setLoading(false);
  };
  return (
    <li
      key={task.id}
      className={`rounded-xl border bg-white px-5 py-4 transition duration-200 ${
        loading
          ? "border-gray-300 animate-pulse opacity-50"
          : "border-gray-200 shadow hover:shadow-md"
      }`}
    >
      <div className={`${loading ? "pointer-events-none select-none" : ""}`}>
        <div className="flex justify-between gap-x-6">
          <div className="flex min-w-0 gap-x-4 items-start">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen(open === task.id ? null : task.id)}
                className="inline-flex justify-center items-center gap-x-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                disabled={loading}
              >
                <FiUsers />
                {currentUser}
              </button>

              {open === task.id && (
                <div
                  className="absolute left-0 mt-2 z-20 w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                >
                  <div className="py-1">
                    {users.map((user) => (
                      <button
                        key={user.id}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          handleUpdateUser(task.id, user.firstName);
                          setOpen(null);
                        }}
                        disabled={loading}
                      >
                        {user.firstName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold text-gray-900">
                {task.title}
              </p>
              <p className="mt-1 truncate text-xs text-gray-500">
                {task.description || "No description"}
              </p>
              <p className="mt-1 truncate text-xs text-gray-500">
                {task.DueDate ? `Due Date: ${task.DueDate}` : "No Due Date"}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-y-1">
            <DropDownButton
              initialValue={currentStage}
              onChange={onStageChange}
              options={COLUMNS}
              className="text-sm border rounded px-2 py-1 text-gray-700"
              disabled={loading}
            />
            <p className="text-xs text-gray-400">ID: {task.id}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskList;
