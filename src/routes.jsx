import { createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import App from "./components/App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <App />,
  },
  {
    path: "about",
    element: (
      <App>
        <About />
      </App>
    ),
  },
]);

export default router;
