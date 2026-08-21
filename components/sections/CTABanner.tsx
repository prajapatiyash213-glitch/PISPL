import { ArrowUpRight, PhoneCall } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTABanner() {
  return (
    <section className="bg-paper px-6 pb-4 pt-4 sm:px-10 lg:px-16">
      <RevealOnScroll>
        <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] bg-navy-800 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />

          <h2 className="relative mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Looking to build or upgrade your IT infrastructure?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-balance text-slate-300/85">
            Tell us where things stand today — we&apos;ll scope a plan that
            fits your business, not a generic package.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
            >
              Book Free Consultation
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              <PhoneCall size={16} />
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
