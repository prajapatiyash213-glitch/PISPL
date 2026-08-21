import { Quote } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { founderMessage } from "@/lib/data";

export default function FounderMessage() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-px mx-auto max-w-3xl text-center">
        <RevealOnScroll>
          <Quote className="mx-auto text-brand-400" size={32} strokeWidth={1.5} />
          <p className="mt-6 text-balance text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            &ldquo;{founderMessage.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            {founderMessage.attribution}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
