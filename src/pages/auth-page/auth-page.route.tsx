import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { AuthPage } from "./auth-page.ui";
export const AuthPageRoute: RouteObject = {
  path: pathKeys.login(),
  element: createElement(AuthPage),
};
