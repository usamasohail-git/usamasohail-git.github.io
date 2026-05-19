"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Usama architected our entire AI matching platform from the ground up. His deep knowledge of LLMs and PostgreSQL vector databases allowed us to launch months ahead of schedule. Truly a 10x engineer.",
    author: "Sarah Jenkins",
    role: "CTO, Theransol",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    content: "Working with Usama was a game-changer for our education platform. He seamlessly integrated complex AI tutor workflows into our Next.js architecture while maintaining incredible performance metrics.",
    author: "David Chen",
    role: "Founder, Machine Learners",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    content: "The backend infrastructure Usama built for our high-concurrency gaming platform handled massive scale during our launch without breaking a sweat. His code is clean, testable, and robust.",
    author: "Alex Mercer",
    role: "VP Engineering, SocialB.Digital",
    avatar: "https://i.pravatar.cc/150?u=alex"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-black/30" id="testimonials">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="What People Say" 
          subtitle="Feedback from founders, CTOs, and engineering leaders I've worked with." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-blue-500/10 transition-colors" />
              
              <p className="text-gray-300 italic mb-8 relative z-10 flex-1 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-blue-400 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
