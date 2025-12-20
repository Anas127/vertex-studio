"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TIMEPIECE",
    category: "E-Commerce Experience",
    description: "A luxury watch boutique built with Next.js and Tailwind. Features real-time inventory management, stripe integration, and a high-performance image optimization pipeline.",
    tags: ["Next.js 14", "Tailwind CSS", "Stripe", "Zustand"],
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2959&auto=format&fit=crop", 
  },
  {
    title: "NEXUS DASHBOARD",
    category: "SaaS Analytics Platform",
    description: "A comprehensive data visualization suite for enterprise clients. Handles millions of data points with sub-second latency using edge caching strategies.",
    tags: ["React", "TypeScript", "Recharts", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop", 
  }
];

export default function Work() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container px-6 md:px-12 mx-auto">
        
        {/* Header - Removed "View All" button */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Selected Work
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just write code; we build revenue-generating assets. Here are a few of our recent deployments.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-1 group-hover:rotate-2 transition-transform opacity-10"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-50 aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text Side - Removed "Case Study" button */}
              <div className="w-full lg:w-1/2 lg:px-6">
                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-md border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}