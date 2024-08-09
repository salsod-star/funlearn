import { createBrowserRouter } from "react-router-dom";
import { About, Courses, Games, Home, Project, UnexpectedError } from "../pages";
import Global from "../layouts/Global";

const routes = createBrowserRouter([
  {
    element: <Global />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <UnexpectedError />,
      },
      {
        path: "/learn",
        element: <Courses />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default routes;
