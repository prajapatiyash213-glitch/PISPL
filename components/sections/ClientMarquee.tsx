import Image from "next/image";
import { clientLogos } from "@/lib/data";

export default function ClientMarquee() {
  return (
    <section id="customers" className="border-t border-slate-100 bg-white py-10 scroll-mt-20">
      <div className="container-px mx-auto max-w-content">
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by Corporate customers
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 w-32 items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={128}
                height={40}
                className="h-auto max-h-12 w-auto max-w-[128px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
