import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Components/LoadingSpinner";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    HydrateFallback: <LoadingSpinner />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      // {
      //   path: "/app/:id",
      //   Component: AppDetails,
      // },
    ],
  },
]);

export default router;
