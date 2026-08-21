import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { deployments, partnerLogos } from "@/lib/data";

export default function Deployments() {
  return (
    <section id="deployments" className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Our deployments"
          title="Real solutions, deployed and running."
          description="A look at the kind of work that fills our week — not a catalogue of products, but proof of execution."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map((d, i) => (
            <RevealOnScroll
              key={d.title}
              delay={0.05 * (i % 3)}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto sm:h-full sm:min-h-[260px]">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-300">
                    {d.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {d.title}
                  </h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
