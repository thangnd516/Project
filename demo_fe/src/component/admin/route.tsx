import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import { Staff } from "./Staff";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/introduction",
        element: <Staff  />,
      },
    ],
  },
]);