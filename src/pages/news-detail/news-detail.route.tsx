import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib";
import { NewsDetailPage } from "./news-detail.ui";

export const NewsDetailPageRoute: RouteObject = {
  path: pathKeys.news.bySlug(":slug"),
  element: createElement(NewsDetailPage),
};
