import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
      //   {
      //     path: "*",
      //     element: <NotFound />,
      //   },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
