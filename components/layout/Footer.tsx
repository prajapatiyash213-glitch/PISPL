import { Linkedin, Facebook, Instagram } from "lucide-react";
import { nav, company } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 text-slate-300">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center group" aria-label="PRISHTVIK Home">
              <Image
                src="/assets/prishtvik_logo_hero.png"
                alt="PRISHTVIK Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.name} — an IT Infrastructure company delivering
              networking, cybersecurity, cloud and surveillance solutions for
              businesses across India.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-400 hover:text-brand-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Our Deployments</h4>
            <ul className="mt-4 space-y-3">
              {[
                "Server & Storage Systems",
                "UPS & Power Infrastructure",
                "Surveillance & CCTV",
                "Networking & Structured Cabling",
                "Video Conferencing & AV Setups",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#deployments"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>IT Infrastructure Company · {company.address}</p>
        </div>
      </div>
    </footer>
  );
}
