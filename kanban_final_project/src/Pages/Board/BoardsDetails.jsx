import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../Components/Modal";
import { useBoards } from "../../contexts/BoardsContext";
import CreateTask from "../../Components/CreateTask";
import { toast } from "react-toastify";
import LayoutToggleButton from "../../Components/LayoutToggleButton";
import GridView from "../../Components/GridView";
import ListView from "../../Components/ListView";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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
  const [isGridView, setIsGridView] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchBoard();
    fetchTask();
  }, [boardId, fetchSingleBoard, fetchTasks]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const db = getFirestore();
      const usersCol = collection(db, "Users");
      const userSnapshot = await getDocs(usersCol);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };
    fetchAllUsers();
  }, []);

  const fetchTask = async () => {
    const task = await fetchTasks(boardId);
    setTasks(task);
  };
  const fetchBoard = async () => {
    const foundBoard = await fetchSingleBoard(boardId);
    setBoard(foundBoard);
  };

  const handleDragEnd = async (e) => {
    try {
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
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{board.name}</h1>
          </div>
          <div className="pr-4 flex items-center space-x-4">
            <LayoutToggleButton onToggle={setIsGridView} />
            <button
              onClick={() => setOpenAddTaskModal(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              + Add Task
            </button>
          </div>
        </div>

        {isGridView ? (
          <GridView
            handleDragEnd={handleDragEnd}
            tasks={tasks}
            loading={loading}
            COLUMNS={COLUMNS}
            users={users}
          ></GridView>
        ) : (
          <ListView
            loading={loading}
            COLUMNS={COLUMNS}
            tasks={tasks}
            users={users}
          ></ListView>
        )}
      </div>
    </>
  );
};

export default BoardsDetails;
