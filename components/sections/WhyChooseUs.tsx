"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      {/* Full-bleed Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="absolute -inset-y-20 inset-x-0 w-full h-[130%]">
          <Image
            src="/images/deployments/facilitate-team.png"
            alt="PISPL team collaboration backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Dark blur/tint overlay for maximum legibility */}
        <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/20 to-navy-950/60 pointer-events-none" />
      </div>

      <div className="container-px relative mx-auto max-w-content z-10">
        <SectionHeading
          eyebrow="Facilitate You"
          title="A value added partner that stays accountable"
          dark
        />

        {/* Liquid Glassmorphic Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <RevealOnScroll key={item.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-white/[0.08] hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,128,254,0.2)]">
                <div className="flex items-center gap-1.5 text-brand-400">
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/80">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
