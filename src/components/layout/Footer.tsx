"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-heading text-white mb-4 block">
              Usama <span className="text-blue-500">Sohail.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Full Stack and AI Engineer building scalable web platforms, AI systems, and real-time applications.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://github.com/usamasohail-git" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/m-usamasohail/" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:usamasohail905@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="#experience" className="hover:text-blue-400 transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Usama Sohail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
