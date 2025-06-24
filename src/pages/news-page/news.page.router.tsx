import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { NewsPage } from "./news-page.ui";

export const NewsPageRoute: RouteObject = {
  path: pathKeys.news.root(),
  element: createElement(NewsPage),
};
