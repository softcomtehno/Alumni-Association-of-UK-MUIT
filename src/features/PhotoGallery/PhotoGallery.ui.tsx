import { motion } from "framer-motion";
import { useGallery } from "~entities/photo-gallery";
import { GalleryCard } from "~entities/photo-gallery";
import { PhotoGalleryProps } from "~entities/photo-gallery";

export const PhotoGallery = ({ items, className }: PhotoGalleryProps) => {
  const galleryItems = useGallery(items);

  // Разбиваем на ряды по 3 элемента
  const rows = [];
  for (let i = 0; i < galleryItems.length; i += 3) {
    rows.push(galleryItems.slice(i, i + 3));
  }

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray mb-4">Фотогалерея</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            >
              {row.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  className={`
                    ${itemIndex === 1 ? "flex-[2_1_0%]" : "flex-[1_1_0%]"}
                    min-h-[200px] sm:min-h-[300px]
                  `}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: rowIndex * 0.2 + itemIndex * 0.1,
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <GalleryCard 
                    item={item} 
                    className="hover:shadow-xl h-full w-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};