import { DashboardLayout } from "./component/layout/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./component/Dashboard/Dashboard";

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        handle: { pageName: "Daksh", pageDescription: "Welcome back!" },
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
