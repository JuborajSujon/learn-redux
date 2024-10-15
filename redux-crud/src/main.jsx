import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Create from "./pages/Create";
import Read from "./pages/Read";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/all-user",
        element: <Read />,
      },

      {
        path: "/create-user",
        element: <Create />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
