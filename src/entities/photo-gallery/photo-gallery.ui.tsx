import { GalleryItem } from "./photo-gallery.types";
import { motion } from "framer-motion";

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
}

export const GalleryCard = ({ item, className }: GalleryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5 }}
    className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
  >
    <div
      className="h-72 bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex items-end "
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative w-full bg-gradient-to-t  to-transparent rounded-b-xl">
          <h3 className="text-white text-xl font-bold truncate px-4 pt-4">
            {item.title}
          </h3>
          <p className="text-gray-300 mt-1 line-clamp-2 px-4 pb-2">
            {item.subtitle}
          </p>

          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-3 px-4 pb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  </motion.div>
);
