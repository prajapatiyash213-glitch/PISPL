"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { nav } from "@/lib/data";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-100/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-[72px] max-w-content items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label="PRISHTVIK Home">
          <Image
            src="/assets/prishtvik_logo_hero.png"
            alt="PRISHTVIK Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((rawItem) => {
            const item = rawItem as NavItem;
            const hasDropdown = "dropdown" in item && item.dropdown;

            if (hasDropdown) {
              return (
                <li key={item.label} className="group relative py-2">
                  <span className="flex items-center gap-1 cursor-pointer text-sm font-medium text-slate-700 hover:text-brand-500 transition-colors">
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </span>
                  
                  {/* Dropdown Container */}
                  <div className="absolute left-0 top-full z-50 w-44 origin-top-left scale-95 opacity-0 pointer-events-none rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto">
                    {item.dropdown?.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-500 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-brand-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-600"
          >
            Get Consultation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden transition-colors text-slate-800"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/95 border-b border-slate-100 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px mx-auto flex flex-col gap-1 py-4">
              {nav.map((rawItem) => {
                const item = rawItem as NavItem;
                const hasDropdown = "dropdown" in item && item.dropdown;

                if (hasDropdown) {
                  return (
                    <li key={item.label} className="flex flex-col gap-1 py-1">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      {item.dropdown?.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  Get Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
