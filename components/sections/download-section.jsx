"use client";

import { Button } from "@/components/ui/button";
import { DOWNLOAD_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useInView } from "react-intersection-observer";

export function DownloadSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="download"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center xl:ml-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Download Cravid Today
            </h2>
            <p className="text-xl text-blue-100">
              Available on all major platforms. Download now and experience the difference.
            </p>

            <div className="space-y-4">
              {DOWNLOAD_LINKS.map((link, index) => {
                const Icon = LucideIcons[link.icon];
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full md:w-auto justify-start border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    >
                      <a href={link.href}>
                        {Icon && <Icon className="h-5 w-5 mr-2" />}
                        {link.name}
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-sm text-blue-200">
              Available for iOS 12+, Android 8+, and modern web browsers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto max-w-xs"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-50" />
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App on Mobile Device"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">4.9/5</span>
                </div>
                <p className="text-white/80 text-xs mt-1">Over 10k+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
