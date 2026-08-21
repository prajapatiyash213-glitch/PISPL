import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Counter from "@/components/ui/Counter";
import { aboutPoints } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-paper py-16 sm:py-20">
      <div className="container-px mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2">
        <RevealOnScroll className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/about-team-v2.jpg"
              alt="PISPL engineering team reviewing an infrastructure deployment"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </RevealOnScroll>

        <div>
          <SectionHeading
            eyebrow="About Prishtvik"
            title="20+ years founder experience"
            description="Prishtvik Info Solutions Pvt Ltd is driven by hands-on industry experience — specialising in reliable, scalable and secure IT solutions built for how modern businesses actually operate."
          />

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
            {aboutPoints.map((point, i) => (
              <RevealOnScroll key={point.label} delay={0.06 * i}>
                <dt className="text-2xl font-semibold text-brand-600 sm:text-3xl">
                  <Counter value={point.value} />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-slate-500">
                  {point.label}
                </dd>
              </RevealOnScroll>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
