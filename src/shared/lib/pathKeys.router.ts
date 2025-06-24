export const pathKeys = {
  root: "/",
  home() {
    return pathKeys.root;
  },
  graduates() {
    return pathKeys.root.concat("graduates/");
  },
  about() {
    return pathKeys.root.concat("about/");
  },
  contacts() {
    return pathKeys.root.concat("contacts/");
  },
  news: {
    root() {
      return pathKeys.root.concat("news/");
    },
    bySlug(slug: string) {
      return pathKeys.news.root().concat(`${slug}`);
    },
  },
  event: {
    root() {
      return pathKeys.root.concat("event/");
    },
    bySlug(slug: string) {
      return pathKeys.event.root().concat(`${slug}`);
    },
  },
};
