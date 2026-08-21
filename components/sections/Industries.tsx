import { Factory, Pill, Building, Rocket, GraduationCap, Landmark } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { industries } from "@/lib/data";

const icons = [Factory, Pill, Building, Rocket, GraduationCap, Landmark];

export default function Industries() {
  return (
    <section id="industries" className="bg-paper py-16 sm:py-20">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Who we serve"
          title="Industries that run on infrastructure we've built."
          align="center"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {industries.map((ind, i) => {
            const Icon = icons[i];
            return (
              <RevealOnScroll key={ind.name} delay={0.05 * i}>
                <div className="group flex h-full flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {ind.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {ind.detail}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
