"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

const titles = [
  "Full Stack Engineer",
  "AI Engineer",
  "Backend Architect",
  "Python Developer",
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background animated particles placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-gray-400 font-mono mb-4">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                Usama Sohail
              </h1>
              
              <div className="h-12 md:h-16 mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl text-gradient font-bold"
                  >
                    {titles[titleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 text-lg">
                Building scalable web platforms, AI systems, and real-time applications. Turning complex problems into elegant solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <Button variant="primary">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="glass">
                  <Download className="mr-2 w-4 h-4" /> Resume
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <SocialLink href="#" icon={<Github />} />
                <SocialLink href="#" icon={<Linkedin />} />
                <SocialLink href="#" icon={<Mail />} />
              </div>
            </motion.div>
          </div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-spin-slow"></div>
              <div className="relative w-full h-full glass-card rounded-full flex items-center justify-center overflow-hidden border-2 border-white/10">
                {/* Fallback silhouette if no image provided */}
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black flex items-end justify-center">
                  <div className="w-3/4 h-3/4 bg-gray-700/50 rounded-t-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </motion.a>
  );
}
