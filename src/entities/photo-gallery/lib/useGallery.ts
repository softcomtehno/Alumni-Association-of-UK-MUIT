import { MOCK_GALLERY } from "../photo-gallery.data";
import { GalleryItem } from "../photo-gallery.types";

export const useGallery = (initialItems?: GalleryItem[]) => {
  return initialItems || MOCK_GALLERY;
};
