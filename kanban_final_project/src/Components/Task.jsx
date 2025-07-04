import { useDraggable } from "@dnd-kit/core";
import { FiUsers } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function TaskCard({ task,users }) {
  const [currentUser, setCurrentUser] = useState(() => {
    return task.user;
  });
  const { updateTasksUser } = useBoards();
  const { boardId } = useParams();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleUpdateUser = async (user) => {
    await updateTasksUser(boardId, task.id, user);
    setCurrentUser(user);
    setOpen(false);
    toast.success("User Updated Successfully ");
  };
  return (
    <div
      ref={setNodeRef}
      className="flex rounded-lg bg-neutral-100 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <div className="flex-1" {...listeners} {...attributes}>
        <div className="flex items-center justify-between">
          <h3 className="font-medium cursor-grab">{task.title}</h3>
        </div>
        <p className="text-sm text-neutral-400">{task.description}</p>
        <p className="mt-1 text-xs text-neutral-400">DueDate: {task.DueDate}</p>
      </div>

      <div className="relative ml-4" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50"
        >
          <FiUsers />
          {currentUser}
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1" role="none">
              {users.map((user) => (
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleUpdateUser(user.firstName)}
                >
                  {user.firstName}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
