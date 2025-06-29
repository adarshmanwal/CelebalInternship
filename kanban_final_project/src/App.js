import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Pages/Root";
import Home from "./Components/Home";
import Login from "./Pages/Authentication/Login";
import { action, logoutAction } from "./actions/AuthActions";
import Signup from "./Pages/Authentication/Signup";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>,
          action: action
        },
        {
          path: "/logout",
          action: logoutAction,
        },
        {
          path: "/signup",
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