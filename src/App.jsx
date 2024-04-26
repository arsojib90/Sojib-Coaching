import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Class10 from "./components/Class10";
import Class11 from "./components/Class11";
import Class12 from "./components/Class12";
import Class8 from "./components/Class8";
import Class9 from "./components/Class9";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./layouts/Main";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/class8",
          element: <Class8 />,
        },
        {
          path: "/class9",
          element: <Class9 />,
        },
        {
          path: "/class10",
          element: <Class10 />,
        },
        {
          path: "/class11",
          element: <Class11 />,
        },
        {
          path: "/class12",
          element: <Class12 />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
