import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-white pt-10 pb-12 sm:pt-12 sm:pb-16">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Client feedback"
          title="What it's like to work with us."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name} delay={0.06 * i}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-paper p-7">
                <Quote size={22} className="text-brand-400" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-200/70 pt-4">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
