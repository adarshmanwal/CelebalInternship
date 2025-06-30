import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { useBoards } from "../contexts/BordsContet";

const CreateBoard = ({ onSuccess }) => {
  const { createBoard } = useBoards();
  const handleCreateBoard = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const boardName = formData.get("name");

    try {
      await createBoard(boardName);
      toast.success("Board created successfully!");
      onSuccess?.();
      event.target.reset();
    } catch (error) {
      toast.error("Failed to create board.");
      console.error(error);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center py-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create a New Board
        </h2>
      </div>
      <Form method="post" onSubmit={handleCreateBoard} className="space-y-6">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Board Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 border  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Board
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateBoard;
