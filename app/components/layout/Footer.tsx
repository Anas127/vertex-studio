"use client";
import { Box, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="container px-6 md:px-12 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Box className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight">VERTEX</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              We build digital products that define the future. 
              Based in the cloud, available worldwide.
            </p>
          </div>

          {/* Links - We use "/#" so these work from the Legal page too */}
          <div>
            <h4 className="font-bold mb-6 text-indigo-100">Sitemap</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/#work" className="hover:text-indigo-400 transition-colors">Work</Link></li>
              <li><Link href="/#capabilities" className="hover:text-indigo-400 transition-colors">Capabilities</Link></li>
              <li><Link href="/#process" className="hover:text-indigo-400 transition-colors">Process</Link></li>
              <li><Link href="/#contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials - Pointing to real URLs with target="_blank" */}
          <div>
            <h4 className="font-bold mb-6 text-indigo-100">Socials</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4"/> Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4"/> GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; 2025 Vertex Studio Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}