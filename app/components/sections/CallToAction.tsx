import { ArrowRight, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>

      <div className="container px-6 md:px-12 mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ready to build the impossible?
        </h2>
        <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-10">
          We have capacity for two new enterprise partners this quarter. 
          Let's discuss your roadmap.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ACTION 1: Link to Calendar (Placeholder) */}
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-xl"
          >
            Schedule Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
          
          {/* ACTION 2: Link to Email */}
          <a 
            href="mailto:hello@vertexstudio.dev?subject=Project%20Inquiry"
            className="px-8 py-4 bg-indigo-700 border border-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}