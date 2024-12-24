import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Saas from "./pages/signin/components/Saas";
import SelfHosted from "./pages/signin/components/SelfHosted";
import Dashboard from "./pages/dashboard/Dashboard";
import Repositories from "./pages/repositories/Repositories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: <Signin />,
    children: [
      {
        index: true,
        element: <Navigate to="/signin/saas" replace />,
      },
      {
        path: "saas",
        element: <Saas />,
      },
      {
        path: "self-hosted",
        element: <SelfHosted />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/repositories" replace />,
      },
      {
        path: "repositories",
        element: <Repositories />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
