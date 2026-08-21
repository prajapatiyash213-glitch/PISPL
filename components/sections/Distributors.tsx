import Image from "next/image";
import { distributorLogos } from "@/lib/data";
import { clsx } from "clsx";

export default function Distributors() {
  return (
    <section className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="container-px mx-auto max-w-content">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Authorized Distributors
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {distributorLogos.map((d) => (
            <div
              key={d.name}
              className="flex h-16 w-48 flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={d.src}
                alt={d.name}
                width={192}
                height={64}
                className={clsx(
                  "max-h-full max-w-full object-contain",
                  d.name.includes("Savex") && "scale-[1]"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
