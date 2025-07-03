// context/BoardContext.js
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Components/firebase";

const BoardContext = createContext({
  boards: [],
  loading: true,
  createBoard: () => {},
  createTask: () => {},
  fetchSingleBoard: () => {},
  fetchTasks: () => {},
  updateTaskStage: () => {},
  updateTasksUser: () => {},
});

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBoards = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "Boards"));
    const boardList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBoards(boardList);
    setLoading(false);
  };

  const fetchSingleBoard = async (boardId) => {
    const boardRef = doc(db, "Boards", boardId);
    const snapshot = await getDoc(boardRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  };
  const updateTaskStage = async (boardId, taskId, newStage) => {
    const taskRef = doc(db, "Boards", boardId, "tasks", taskId);
    await updateDoc(taskRef, { stage: newStage });
  };
  const createBoard = async (name) => {
    await addDoc(collection(db, "Boards"), {
      name,
      createdAt: new Date().toISOString(),
    });
    await fetchBoards(); // refresh after creation
  };

  const fetchTasks = async (boardId) => {
    const tasksRef = collection(db, "Boards", boardId, "tasks");
    const snapshot = await getDocs(tasksRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const updateTasksUser = async (boardId, taskId, user) => {
    debugger
    const taskRef = doc(db, "Boards", boardId, "tasks", taskId);
    await updateDoc(taskRef, { user: user });

  };

  const createTask = async (boardId, task) => {
    await addDoc(collection(db, "Boards", boardId, "tasks"), {
      ...task,
      createdAt: new Date().toISOString(),
    });
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const ctx = {
    boards,
    loading,
    createBoard,
    fetchTasks,
    fetchSingleBoard,
    createTask,
    updateTaskStage,
    updateTasksUser,
  };

  return <BoardContext.Provider value={ctx}>{children}</BoardContext.Provider>;
};

export const useBoards = () => useContext(BoardContext);
