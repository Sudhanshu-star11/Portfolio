import Navbar from "@/components/Navbar";
import HeroSTaaS from "@/components/HeroSTaaS";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ConstellationBackground from "@/components/ConstellationBackground";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSTaaS />
      <Stats />
      <Services />
      <Process />
      
      {/* Footer / Contact */}
      <footer id="contact" className="relative z-20 bg-black overflow-hidden py-32 px-8 text-center border-t border-neutral-900">
        <ConstellationBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-8 tracking-tight">
            Ready to <span className="text-blue-500">Connect?</span>
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto mb-16">
            Let's discuss how our elite software testing services can help you deliver flawless applications and accelerate your business growth.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-24">
            <a href="mailto:business@skieglobal.com" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              business@skieglobal.com
            </a>
          </div>
          <p className="text-sm font-medium text-neutral-600">
            © {new Date().getFullYear()} SKIE Global. All rights reserved. ALWAYS HAPPY TO SUPPORT.
          </p>
        </div>
      </footer>
    </main>
  );
}
