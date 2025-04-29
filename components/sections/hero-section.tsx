"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background wallpaper showcase */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-900/70 backdrop-blur-sm z-10" />
        <div className="grid grid-cols-3 gap-4 p-4 absolute inset-0">
          {[
            "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          ].map((src, index) => (
            <motion.div
              key={src}
              className="aspect-[3/4] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt="Wallpaper preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            {SITE_CONFIG.description}. Discover thousands of stunning wallpapers for your desktop and mobile devices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Browse Collection
            </Button>
            <a
              href="#download"
              className="inline-block bg-white border-white text-black hover:bg-white/10 hover:text-white transition-all duration-300 ease-in-out px-4 py-2 border rounded-lg"
            >
              Download App
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 max-w-lg mx-auto"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-slate-300">Wallpapers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">4K</div>
                <div className="text-sm text-slate-300">Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-slate-300">Categories</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}