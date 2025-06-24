export interface EventItem {
  id: string;
  date: string;
  slug: string;
  title: string;
  imageUrl?: string;
  category?: "event";
  description?: string;
}

export type EventList = EventItem[];
