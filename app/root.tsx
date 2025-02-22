import { scan } from "react-scan"; // Must be imported before React Router
import { Outlet } from "react-router";

import "./app.css";
import { Header } from "./components/header";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

scan({
  enabled: true,
  animationSpeed: "slow",
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/:slug", lazy: () => import("./routes/product") }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <div className="product-page">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
