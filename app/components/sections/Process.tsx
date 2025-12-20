"use client";
import { Search, Code2, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We dive deep into your business logic to define technical requirements and success metrics."
    },
    {
      icon: Code2,
      title: "Development",
      desc: "Agile sprints with weekly deliverables. You see progress in real-time, not just at the deadline."
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "Zero-downtime deployment strategies and automated testing ensure a bulletproof release."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-slate-600">From chaos to code in three steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                <step.icon className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}