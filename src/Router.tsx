import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";

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
      //   {
      //     path: "*",
      //     element: <NotFound />,
      //   },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
