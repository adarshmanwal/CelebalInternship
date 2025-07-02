import { useState } from "react";
import { useBoards } from "../../contexts/BoardsContext";
import Model from "../../Components/Modal";
import CreateBoard from "../../Components/CreateBoard";
import { Link } from "react-router-dom";
const Boards = () => {
  const [showModal, setShowModal] = useState(false);
  const { boards, loading } = useBoards();
  return (
    <>
      <Model open={showModal} onClose={() => setShowModal(false)}>
        <CreateBoard onSuccess={() => setShowModal(false)} />
      </Model>

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Your Boards</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Create Board
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {boards.map((board) => (
              <Link
                key={board.id}
                to={`/boards/${board.id}`}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-200 hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {board.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {board.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Boards;
