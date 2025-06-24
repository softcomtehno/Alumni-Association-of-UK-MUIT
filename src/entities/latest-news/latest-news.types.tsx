export interface NewsItem {
  id: string;
  date: string;
  slug: string;
  title: string;
  imageUrl?: string;
  category?: "news";
  description?: string;
}

export type NewsList = NewsItem[];
