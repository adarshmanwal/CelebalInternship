import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Root from "./Pages/Root";
import Login from "./Pages/Authentication/Login";
import { action, logoutAction } from "./actions/AuthActions";
import Signup from "./Pages/Authentication/Signup";
import Board from "./Pages/Board/Boards";
import loadBoards from "./loaders/boards";
import BoardsDetails from "./Pages/Board/BoardsDetails";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
        {
          index: true,
          element: <Navigate to="/boards" replace />,
        },
        {
          path: 'boards',
          // loader: loadBoards,
          element: <Board></Board>,
        },
        {
          path: "boards/:boardId",
          element: <BoardsDetails></BoardsDetails>
        },
        {
          path: "login",
          element: <Login></Login>,
          action: action
        },
        {
          path: "logout",
          action: logoutAction,
        },
        {
          path: "signup",
          element: <Signup></Signup>,
          action: action
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}