export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

export interface PhotoGalleryProps {
  items?: GalleryItem[];
  className?: string;
}
