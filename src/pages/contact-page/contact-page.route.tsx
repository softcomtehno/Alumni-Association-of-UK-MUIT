import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { ContactPage } from "./contact-page.ui";

export const ContactPageRoute: RouteObject = {
  path: pathKeys.contacts(),
  element: createElement(ContactPage),
};
