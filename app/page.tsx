import Hero from "@/app/components/sections/Hero";
import Capabilities from "@/app/components/sections/Capabilities";
import Work from "@/app/components/sections/Work";
import Process from "@/app/components/sections/Process";
import CallToAction from "@/app/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      
      {/* The ID="work" is what the 'View Our Work' button looks for */}
      <div id="capabilities">
        <Capabilities />
      </div>
      
      <div id="work">
        <Work />
      </div>

      <div id="process">
        <Process />
      </div>

      {/* The ID="contact" is what 'Contact Sales' looks for */}
      <div id="contact">
        <CallToAction />
      </div>
    </main>
  );
}