import {
  ServerCog,
  Laptop,
  Network,
  ShieldCheck,
  Building2,
  Camera,
  Check,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  infrastructure: ServerCog,
  "end-user-devices": Laptop,
  networking: Network,
  "cybersecurity-cloud": ShieldCheck,
  enterprise: Building2,
  surveillance: Camera,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="What we do"
          title="Core services, grouped by what your business actually needs."
          description="Six focused practice areas — each executed end-to-end by our own team, not outsourced piecemeal."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id];
            return (
              <RevealOnScroll key={service.id} delay={0.05 * (i % 3)}>
                <article className="group relative h-full rounded-2xl border border-slate-100 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors duration-300 group-hover:bg-brand-500">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-200/70 pt-5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 flex-shrink-0 text-brand-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
