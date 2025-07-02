import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../Components/Modal";
import { useBoards } from "../../contexts/BoardsContext";
import CreateTask from "../../Components/CreateTask";
import Column from "../../Components/Column";
import { DndContext } from "@dnd-kit/core";
import { toast } from "react-toastify";

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];
const BoardsDetails = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const { boardId } = useParams();
  const { fetchSingleBoard, fetchTasks, updateTaskStage } = useBoards();
  const [board, setBoard] = useState({});
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchBoard();
    fetchTask();
  }, [boardId]);

  const fetchTask = async () => {
    const task = await fetchTasks(boardId);
    setTasks(task);
  };
  const fetchBoard = async () => {
    const foundBoard = await fetchSingleBoard(boardId);
    setBoard(foundBoard);
  };

  const handleDragEnd =async (e) => {
    try {
      console.log("Drag Ended");
      setLoading(true);
      const { active, over } = e;
      if (!over) return;
      const taskId = active.id;
      const newStage = over.id;
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, stage: newStage } : task
        )
      );
      await updateTaskStage(boardId, taskId, newStage);
      setLoading(false);
      console.log("Drag Ended");
    } catch (error) {
      toast.error("Error while updating task stage");
      setLoading(false);
      return;
    }
  };
  return (
    <>
      <Modal
        open={openAddTaskModal}
        onClose={() => {
          setOpenAddTaskModal(false);
        }}
      >
        <CreateTask
          boardId={board.id}
          onClose={() => {
            setOpenAddTaskModal(false);
          }}
          fetchTask={fetchTask}
        ></CreateTask>
      </Modal>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{board.name}</h1>
          <button
            onClick={() => setOpenAddTaskModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Add Task
          </button>
        </div>

        <div className="flex space-x-6 overflow-x-auto">
          <DndContext onDragEnd={handleDragEnd}>
            {!loading ? (
              COLUMNS.map((column) => {
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks.filter((task) => task.stage === column.id)}
                  ></Column>
                );
              })
            ) : (
              <div className="flex justify-center items-center h-64 w-full">
                <p className="text-gray-500">Loading...</p>
              </div>
            )}
          </DndContext>
        </div>
      </div>
    </>
  );
};

export default BoardsDetails;
