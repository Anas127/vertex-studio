"use client";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

export default function Hero() {
  
  // Function to handle scrolling
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b0a_1px,transparent_1px),linear-gradient(to_bottom,#64748b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>


      <div className="container relative z-10 px-6 md:px-12 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 mb-8 shadow-sm"
        >
          <Box className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">Digital Product Studio</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6"
        >
          SHAPE THE <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600">
            FUTURE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
        >
          We engineer high-performance web applications. 
          From concept to deployment, we build the systems that power your business.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Scrolls to #work */}
          <button 
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:-translate-y-0.5"
          >
            View Our Work <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Scrolls to #contact */}
          <button 
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors shadow-sm"
          >
            Contact Sales
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator - HIDDEN ON MOBILE (hidden md:flex) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>

    </section>
  );
}