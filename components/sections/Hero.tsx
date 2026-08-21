"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck } from "lucide-react";
import NetworkTopology from "@/components/ui/NetworkTopology";
import StatCounter from "@/components/ui/StatCounter";
import { heroStats } from "@/lib/data";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pb-12 pt-40 sm:pb-16 sm:pt-44"
    >
      {/* Neon light Circuit Board backdrop */}
      <div className="absolute inset-0">
        <NetworkTopology />
      </div>
      
      {/* Soft fade-out at the base */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container-px relative mx-auto max-w-content z-20 pointer-events-none">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-brand-600"
            >
              <ShieldCheck size={14} />
              IT Infrastructure · Networking · Cloud Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Turnkey IT Infrastructure
              <span className="block text-brand-500">
                &amp; Cloud Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-600"
            >
              20+ years of founder-led expertise, trusted by businesses across
              India — from turnkey infrastructure builds to networks that stay
              up and data that stays protected.
            </motion.p>
          </div>

          {/* Visual: floating product illustration with glass card */}
          <div
            ref={visualRef}
            className="relative mx-auto w-full max-w-md lg:max-w-none pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/5 blur-3xl pointer-events-none" />
              <div className="relative rounded-[1.75rem] border border-slate-100 bg-white/70 p-6 backdrop-blur-md shadow-card">
                <Image
                  src="/images/hero-visual.png"
                  alt="Illustration of PRISHTVIK's IT infrastructure and network security solutions"
                  width={452}
                  height={476}
                  priority
                  className="mx-auto h-auto w-full max-w-[380px] drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-[0_4px_20px_-4px_rgba(8,19,39,0.06)] backdrop-blur-sm lg:p-8 pointer-events-auto"
        >
          <div className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 text-center">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <dd className="text-2xl font-bold text-slate-950 sm:text-3xl">
                  <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </dd>
                <dd className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 max-w-[150px] text-center">
                  {s.label}
                </dd>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
