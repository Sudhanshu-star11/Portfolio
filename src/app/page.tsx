import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import StarsBackground from "@/components/StarsBackground";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />
      <ScrollyCanvas />
      <About />
      <Experience />
      <Skills />
      
      {/* Footer / Contact */}
      <footer id="contact" className="relative z-20 bg-neutral-900 overflow-hidden py-32 px-8 text-center border-t border-neutral-100">
        <StarsBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Ready to <span className="font-medium">Connect?</span>
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto mb-16">
            I'm always open to discussing testing strategies, automation frameworks, or potential career opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-24">
            <a href="mailto:sudhanshu@skieglobal.in" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-100 transition-colors">
              sudhanshu@skieglobal.in
            </a>
            <a href="tel:+916267780738" className="bg-neutral-800 text-white border border-neutral-700 px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-700 transition-colors">
              +91-6267780738
            </a>
          </div>
          <p className="text-sm font-medium text-neutral-500">
            © {new Date().getFullYear()} Sudhanshu Khandelwal. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
