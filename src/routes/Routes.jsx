import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ShowBooks from "../pages/ShowBooks/ShowBooks";
import AddBooks from "../pages/AddBooks/AddBooks";
import EditBook from "../pages/EditBook/EditBook";
import LatestBooks from "../pages/LatestBooks/LatestBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/showBooks",
        element: <ShowBooks></ShowBooks>,
      },
      {
        path: "/latestBooks",
        element: <LatestBooks></LatestBooks>
      },
      {
        path: "/addBooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/editBook",
        element: <EditBook></EditBook>,
      },
    ],
  },
]);

export default router;
