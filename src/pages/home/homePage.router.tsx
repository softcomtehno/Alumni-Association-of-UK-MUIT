import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { HomePage } from "./homePage";

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(HomePage),
};
