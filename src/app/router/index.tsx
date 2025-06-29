import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GenericLayout } from "~app/layout";
import { homePageRoute } from "~pages/index";
import { NewsPageRoute } from "~pages/news-page";
import { NewsDetailPageRoute } from "~pages/news-detail";
import { EventDetailPageRoute } from "~pages/event-detail";
import { GraduatesPageRoute } from "~pages/graduates-page";
import { AboutPageRoute } from "~pages/about-page";
import { ContactPageRoute } from "~pages/contact-page";
import { AuthPageRoute } from "~pages/auth-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GenericLayout />,
    errorElement: <h1>Error 404!</h1>,
    children: [
      homePageRoute,
      NewsPageRoute,
      NewsDetailPageRoute,
      EventDetailPageRoute,
      GraduatesPageRoute,
      AboutPageRoute,
      ContactPageRoute,
      AuthPageRoute,
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
