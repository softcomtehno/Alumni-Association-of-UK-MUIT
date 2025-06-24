import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { AboutPage } from "./about-page.ui";

export const AboutPageRoute: RouteObject = {
  path: pathKeys.about(),
  element: createElement(AboutPage),
};
