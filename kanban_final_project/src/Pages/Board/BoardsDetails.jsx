import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Components/firebase";
import Modal from "../../Components/Modal";
import { useBoards } from "../../contexts/BordsContet";
import CreateTask from "../../Components/CreateTask";

const BoardsDetails = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const { boardId } = useParams();
  const { fetchSingleBoard, fetchTasks } = useBoards();
  const [board, setBoard] = useState({});
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState({
  //   title: "",
  //   description: "",
  //   stage: "To Do",
  // });
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
          {["To Do", "In Progress", "Done"].map((listTitle) => (
            <div
              key={listTitle}
              className="w-80 bg-gray-100 rounded-lg shadow-sm p-4 flex-shrink-0"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {listTitle}
                </h2>
              </div>

              {tasks
                .filter((card) => card.stage === listTitle)
                .map((card) => (
                  <div
                    key={card.id}
                    className="bg-white p-4 rounded-lg shadow mb-4 cursor-pointer hover:bg-gray-50"
                  >
                    <h3 className="text-sm font-medium text-gray-900">
                      Task Title: {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {card.description}
                    </p>
                    <div className="mt-2 text-xs text-gray-400">
                      Due: {new Date(card.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardsDetails;
