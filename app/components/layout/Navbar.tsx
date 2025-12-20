"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Box, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false); // Close menu on click
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 h-20 z-50 flex items-center justify-center pointer-events-none"
      >
        <div className="container px-6 md:px-12 flex items-center justify-between pointer-events-auto">
          
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/50 shadow-sm cursor-pointer hover:border-indigo-200 transition-colors"
          >
            <Box className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-slate-900 tracking-tight">VERTEX</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/50 shadow-sm">
            <button onClick={() => handleNavigation('capabilities')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Capabilities</button>
            <button onClick={() => handleNavigation('work')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Work</button>
            <button onClick={() => handleNavigation('process')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Process</button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-1 md:p-0 rounded-full md:rounded-none pointer-events-auto">
            {/* CTA Button (Desktop) */}
            <button 
              onClick={() => handleNavigation('contact')}
              className="hidden md:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-200/50"
            >
              Start Project
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 bg-white rounded-full border border-slate-200 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 z-40 p-4 md:hidden pointer-events-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 flex flex-col gap-2">
              <button onClick={() => handleNavigation('capabilities')} className="p-4 text-left font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Capabilities</button>
              <button onClick={() => handleNavigation('work')} className="p-4 text-left font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Work</button>
              <button onClick={() => handleNavigation('process')} className="p-4 text-left font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Process</button>
              <div className="h-px bg-slate-100 my-2"></div>
              <button onClick={() => handleNavigation('contact')} className="p-4 text-center font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}