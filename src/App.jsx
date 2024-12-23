import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Saas from "./pages/signin/components/Saas";
import SelfHosted from "./pages/signin/components/SelfHosted";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
