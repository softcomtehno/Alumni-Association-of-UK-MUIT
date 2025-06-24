import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { EventDetailPage } from "./event.detail.ui";

export const EventDetailPageRoute: RouteObject = {
  path: pathKeys.event.bySlug(":slug"),
  element: createElement(EventDetailPage),
};
