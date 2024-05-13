import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/home/:page",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to="/home/1" />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
