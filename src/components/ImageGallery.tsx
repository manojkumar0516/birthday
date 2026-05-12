import { motion } from 'motion/react';

const images = [
  {
    url: "https://cdn.corenexis.com/files/c/5432184720.jpg",
    alt: "Holding hands romance"
  },
  {
    url: "https://cdn.corenexis.com/files/c/5776529720.png",
    alt: "Divine sunset love"
  },
  {
    url: "https://cdn.corenexis.com/files/c/3342698720.jpg",
    alt: "Beautiful ring and commitment"
  },
  {
    url: "https://cdn.corenexis.com/files/c/8143737720.jpg",
    alt: "Romantic silhouettes"
  },
  {
    url: "https://cdn.corenexis.com/files/c/7444737720.png",
    alt: "Nature and eternity"
  },
  {
    url: "https://cdn.corenexis.com/files/c/9429733720.png",
    alt: "Pure love and joy"
  }
];

export default function ImageGallery() {
  return (
    <div className="w-full px-4">
      <motion.h3 
        className="text-center font-serif text-3xl md:text-4xl mb-8 text-romantic-900 font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Beautiful Memories
      </motion.h3>
      
      {/* Perfectly ordered same-size images using grid and aspect-square */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="w-full h-full"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="w-full h-full"
            >
              <motion.div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden group bg-black/40 aspect-square shadow-md border border-divine-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                
                <motion.img 
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                
                <div className="absolute inset-0 ring-1 ring-inset ring-divine-gold/50 rounded-xl sm:rounded-2xl z-20 pointer-events-none shadow-inner" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
