import HeroSTaaS from "@/components/HeroSTaaS";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-slate-50">
      <HeroSTaaS />
      <Stats />
      <Services />
      <Process />
    </main>
  );
}
