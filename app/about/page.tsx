"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Image from "next/image";
import { Shield, Award, CheckCircle, Star, Users, Briefcase, Compass, Target, Heart } from "lucide-react";
import Counter from "@/components/ui/Counter";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">

        {/* Section 1: Page Hero & Overview */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-navy-500/5 blur-3xl" />

          <div className="container-px relative mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Prishtvik"
                title="20+ years founder experience"
                description="Prishtvik Info Solutions Pvt Ltd is driven by hands-on industry experience — specialising in reliable, scalable, and secure IT solutions built for how modern businesses actually operate."
              />
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Founded with a vision to move away from generic &quot;box-moving&quot; sales models, Prishtvik works as a value-added integration partner. We stay fully accountable for the architecture, security, and maintenance of every infrastructure we construct.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-200/80 pt-8">
                <div>
                  <dt className="text-4xl font-extrabold tracking-tight text-brand-600">
                    <Counter value="2006" />
                  </dt>
                  <dd className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Year Founded</dd>
                </div>
                <div>
                  <dt className="text-4xl font-extrabold tracking-tight text-brand-600">
                    <Counter value="100%" />
                  </dt>
                  <dd className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Accountability</dd>
                </div>
              </div>
            </div>

            <RevealOnScroll className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-3 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-team-v2.jpg"
                    alt="PISPL engineering team reviewing an infrastructure deployment"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Section 2: Founder Deck (Bhavesh Makawana) */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
          {/* Subtle glowing elements */}
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/5 blur-3xl" />

          <div className="container-px relative mx-auto max-w-content">
            <SectionHeading
              eyebrow="Founder Deck"
              title="Our business is steered by..."
              align="center"
              dark
            />

            <div className="mt-16 flex flex-col">
              {/* Founder 1: Bhavesh Makawana */}
              <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] items-center pb-16">
                <RevealOnScroll className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white">Bhavesh Makawana</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-400">Managing Director & Founder</p>
                  </div>
                  <div className="h-1 w-16 bg-brand-500 rounded-full" />

                  <p className="text-base leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Bhavesh Makawana</strong> has been the driving force behind Prishtvik <strong className="text-white font-semibold">since 2006</strong>. With <strong className="text-white font-semibold">over two decades of hands-on technical experience</strong>, he steers the engineering and strategic vision of the enterprise.
                  </p>
                  <p className="text-base leading-relaxed text-slate-300">
                    Under his leadership, Prishtvik has scaled from a regional IT service setup to an enterprise-grade infrastructure integration partner, trusted by major corporates, pharma companies, and government entities across India. He remains closely involved in the architecture and delivery of every major deployment, guaranteeing maximum uptime and performance.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll className="flex justify-center lg:justify-end" delay={0.1}>
                  <div className="group relative w-full max-w-[420px] lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-navy-900/60 p-2">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/bhavesh-makawana-v2.jpg"
                        alt="Bhavesh Makawana - MD & Founder"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white pointer-events-none">
                        <p className="font-bold text-xl">Bhavesh Makawana</p>
                        <p className="text-xs text-brand-400 mt-1">MD & Founder (since 2006)</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Founder 2: Tauseef Pathan */}
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] items-center pt-16 border-t border-white/5">
                {/* Photo (Left on Desktop, Below Text on Mobile) */}
                <RevealOnScroll className="flex justify-center lg:justify-start order-2 lg:order-1" delay={0.1}>
                  <div className="group relative w-full max-w-[420px] lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-navy-900/60 p-2">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/Toshif khan.png"
                        alt="Tauseef Pathan - Director – Finance"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white pointer-events-none">
                        <p className="font-bold text-xl">Tauseef Pathan</p>
                        <p className="text-xs text-brand-400 mt-1">Director – Finance</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Text (Right on Desktop, Above Photo on Mobile) */}
                <RevealOnScroll className="space-y-6 order-1 lg:order-2">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white">Tauseef Pathan</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-400">Director – Finance</p>
                  </div>
                  <div className="h-1 w-16 bg-brand-500 rounded-full" />

                  <p className="text-base leading-relaxed text-slate-300">
                    As Director – Finance, <strong className="text-white font-semibold">Tauseef Pathan</strong> leads the company&apos;s financial strategy, governance, and business planning, ensuring sustainable growth and long-term value creation. With over <strong className="text-white font-semibold">10 years of experience</strong> as a <strong className="text-white font-semibold">Cost & Management Accountant</strong>, he brings deep expertise in finance, accounting, budgeting, financial planning, compliance, and corporate governance.
                  </p>
                  <p className="text-base leading-relaxed text-slate-300">
                    He plays a pivotal role in driving financial excellence, optimizing business performance, and supporting strategic decision-making across the organization.
                  </p>
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>        {/* Section 3: Steering Core (Mission, Vision & Core Values) */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-px mx-auto max-w-content">
            <div className="grid gap-8 lg:grid-cols-2">

              {/* Row 1: Our Mission (Spans Both) */}
              <RevealOnScroll className="lg:col-span-2 flex h-full">
                <div className="w-full rounded-3xl border border-navy-200/50 bg-navy-50/20 p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Target size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    To understand our customers&apos; unique business needs and serve as a trusted, value-added partner — delivering the right solutions that create measurable impact, drive lasting success, and foster enduring relationships.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Row 2: Our Vision (Spans Both) */}
              <RevealOnScroll className="lg:col-span-2 flex h-full" delay={0.06}>
                <div className="w-full rounded-3xl border border-navy-200/50 bg-navy-50/20 p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full lg:items-end lg:text-right">
                  <div className="flex items-center gap-4 lg:flex-row-reverse">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Compass size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Our vision is to build resilient foundations for enterprises, we strive to design scalable IT Infrastructure that evolve with our clients&apos; goal, enabling sustainable growth and long-term business success through continuous innovation, right channel approach and trusted expertise. Establishing ourselves as the industry&apos;s most trusted, dependable, and accountable infrastructure partner.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Row 3: Core Values (Spans Both) */}
              <RevealOnScroll className="lg:col-span-2 flex h-full" delay={0.12}>
                <div className="w-full rounded-3xl border border-navy-200/50 bg-navy-50/20 p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Heart size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Success of our employees, customers, and partners through freedom of expression, transparency, inclusion, and wellness. We believe in high performance using optimum resources and keeping customization at our core.
                  </p>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* Section 4: ISO Certified (Logos Only) */}
        <section className="bg-slate-50 py-20 border-t border-b border-slate-200/50 sm:py-28">
          <div className="container-px mx-auto max-w-content">
            <SectionHeading
              eyebrow="Compliance & Quality Standards"
              title="ISO Certified Operations"
              align="center"
            />

            <div className="mt-16 flex flex-wrap items-center justify-center gap-12 sm:gap-16">

              {/* ISO 9001 Badge Image logo */}
              <RevealOnScroll className="group relative w-64 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-36 w-36 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/iso/9001.png"
                    alt="ISO 9001 Certified Seal"
                    width={144}
                    height={144}
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl font-bold text-slate-900">9001:2015</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">Quality Management System</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <CheckCircle size={14} className="text-emerald-500" />
                  CERTIFIED
                </div>
              </RevealOnScroll>

              {/* ISO 27001 Badge Image logo */}
              <RevealOnScroll className="group relative w-64 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300" delay={0.1}>
                <div className="relative h-36 w-36 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/iso/27001.png"
                    alt="ISO 27001 Certified Seal"
                    width={144}
                    height={144}
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl font-bold text-slate-900">27001:2022</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">Information Security Management</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <CheckCircle size={14} className="text-emerald-500" />
                  CERTIFIED
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* Section 5: Key Accomplishments */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-px mx-auto max-w-content">
            <SectionHeading
              eyebrow="Milestones"
              title="Key Accomplishments"
              align="center"
            />

            <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">

              <RevealOnScroll className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:shadow-lg transition-shadow">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
                  <Briefcase size={22} />
                </span>
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                  <Counter value="20+" />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Corporate Clients</p>
              </RevealOnScroll>

              <RevealOnScroll className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:shadow-lg transition-shadow" delay={0.05}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
                  <Users size={22} />
                </span>
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                  <Counter value="30,000+" />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Support Calls Handled</p>
              </RevealOnScroll>

              <RevealOnScroll className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:shadow-lg transition-shadow" delay={0.1}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
                  <Award size={22} />
                </span>
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                  <Counter value="30+" />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">OEM Partners</p>
              </RevealOnScroll>

              <RevealOnScroll className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:shadow-lg transition-shadow" delay={0.15}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
                  <CheckCircle size={22} />
                </span>
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">
                  <Counter value="₹100M+" />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Revenue Generated</p>
              </RevealOnScroll>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
