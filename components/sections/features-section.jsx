"use client";

import { FEATURES, WALLPAPER_CATEGORIES } from "@/lib/constants";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useInView } from "react-intersection-observer";

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Find the perfect wallpaper from our extensive collection of high-quality categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {WALLPAPER_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80">{category.count.toLocaleString()} wallpapers</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Experience the best wallpaper app with our premium features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = LucideIcons[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-800 group"
              >
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
