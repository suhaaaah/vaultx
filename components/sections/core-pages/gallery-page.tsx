"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { galleryFilters, galleryItems, type GalleryFilter } from "@/lib/core-pages-data";

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const filteredGallery = useMemo(
    () => (activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <main className="min-h-screen bg-black pb-32 pt-32 text-white">
      <section className="site-container mb-16 md:mb-32">
        <div className="mb-10 animate-rise md:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">OUR FACILITIES</p>
          <h1 className="mb-6 text-4xl font-extralight text-white sm:text-5xl md:text-7xl">Gallery</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-400">
            Take a virtual tour of our state-of-the-art facilities and see why businesses trust VaultX.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-4" aria-label="Gallery filters">
          {galleryFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`border px-6 py-3 text-sm font-light tracking-wider transition-all duration-300 ${
                  isActive
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-500"
                    : "border-gray-800 text-gray-400 hover:border-yellow-500/50 hover:text-yellow-500/70"
                }`}
                aria-pressed={isActive}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                className="group relative overflow-hidden border border-gray-800 transition-all duration-500 hover:border-yellow-500/50"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-yellow-500/10 to-transparent">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.15]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <div>
                      <p className="mb-2 text-xs font-light uppercase tracking-[0.2em] text-yellow-500">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-light text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
