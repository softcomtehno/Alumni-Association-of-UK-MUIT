import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GenericLayout } from "~app/layout";
import { homePageRoute } from "~pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenericLayout />,
    errorElement: <h1>Error 404!</h1>,
    children: [homePageRoute],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
