import { motion } from "framer-motion";
import { useGallery } from "~entities/photo-gallery";
import { GalleryCard } from "~entities/photo-gallery";
import { PhotoGalleryProps } from "~entities/photo-gallery";

export const PhotoGallery = ({ items, className }: PhotoGalleryProps) => {
  const galleryItems = useGallery(items);

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray mb-4">
            Фотогалерея
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.03 }}
            >
              <GalleryCard item={item} className="hover:shadow-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
