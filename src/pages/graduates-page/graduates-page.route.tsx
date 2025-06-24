import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { GraduatesPage } from "./graduates-page.ui";

export const GraduatesPageRoute: RouteObject = {
  path: pathKeys.graduates(),
  element: createElement(GraduatesPage),
};
