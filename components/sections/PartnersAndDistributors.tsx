import Image from "next/image";
import { partnerLogos, distributorLogos } from "@/lib/data";
import { clsx } from "clsx";

export default function PartnersAndDistributors() {
  return (
    <section id="brands" className="bg-white py-12 border-t border-slate-100">
      <div className="container-px mx-auto max-w-content">

        {/* Single Main Section Heading */}
        <p className="mb-16 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Authorized Distributors and Partners
        </p>

        <div className="space-y-12">
          {/* Row 1: Distributors (Scrolling Left to Right) */}
          <div className="mask-fade-x overflow-hidden">
            {/* Using animate-marquee-reverse for Left to Right flow */}
            <div className="flex w-max animate-marquee-reverse items-center gap-16 hover:[animation-play-state:paused]">
              {[
                ...distributorLogos,
                ...distributorLogos,
                ...distributorLogos,
                ...distributorLogos,
              ].map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="flex h-20 w-52 flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={d.src}
                    alt={d.name}
                    width={192}
                    height={64}
                    className={clsx(
                      "max-h-[60px] max-w-full object-contain",
                      d.name.includes("Savex") && "scale-[1.05]"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Technology Partners (Scrolling Right to Left) */}
          <div className="mask-fade-x overflow-hidden">
            {/* Using standard animate-marquee for Right to Left flow */}
            <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
              {[...partnerLogos, ...partnerLogos].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex h-14 w-40 flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={160}
                    height={56}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
