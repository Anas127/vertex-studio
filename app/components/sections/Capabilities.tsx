"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Layers, LayoutTemplate, Smartphone, Zap } from "lucide-react";

const services = [
  { icon: LayoutTemplate, title: "UI/UX Design", description: "We craft intuitive, pixel-perfect interfaces that delight users and drive conversion." },
  { icon: Globe, title: "Web Development", description: "Scalable, lightning-fast web applications built with modern frameworks like Next.js." },
  { icon: Smartphone, title: "Mobile Solutions", description: "Responsive across all devices, ensuring a seamless experience on phones and tablets." },
  { icon: Cpu, title: "Backend Architecture", description: "Robust and secure server-side systems designed to handle high traffic loads." },
  { icon: Layers, title: "Product Strategy", description: "We help define your MVP and roadmap to ensure market fit before writing code." },
  { icon: Zap, title: "Performance Tuning", description: "Optimizing existing applications for maximum speed and Core Web Vitals scores." },
];

export default function Capabilities() {
  return (
    // CHANGE: bg-slate-100 (Slightly darker grey than Hero to show separation)
    <section className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="container px-6 md:px-12 mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Full-cycle digital product development. We handle everything from the napkin sketch to global deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              // CHANGE: Cards are Pure White (bg-white). This pops gently against the grey background.
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}