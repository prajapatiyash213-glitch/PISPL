"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { company } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  // Place Web3Forms Access Key here (sent to bhavesh.m@pisplindia.com)
  const ACCESS_KEY = "925b877e-8114-4891-aa7c-6d2cd004283a";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Lead from PISPL Website Contact Form");
    formData.append("from_name", "PISPL Website Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("sent");
      } else {
        console.error("Web3Forms error:", result);
        setStatus("idle");
        alert("Form submission failed. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Submission network error:", error);
      setStatus("idle");
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="bg-white pt-10 pb-24 sm:pt-12 sm:pb-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's scope your next infrastructure project."
          description="Share a few details and our team will get back to you shortly."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealOnScroll>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-navy-800 p-8 text-white sm:p-10">
              <div>
                <h3 className="text-lg font-semibold">
                  Talk to the team directly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
                  Prefer a call or email? Reach us directly — you&apos;ll
                  speak with the people actually doing the work.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 text-brand-400" />
                    <span className="text-sm text-slate-200">
                      {company.phone}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 text-brand-400" />
                    <span className="text-sm text-slate-200">
                      {company.email}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-brand-400" />
                    <span className="text-sm text-slate-200">
                      {company.address}
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
                {company.name} · {company.tagline}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-100 bg-paper p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-ink"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-ink"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500"
                    placeholder="Your company"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-ink"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500"
                    placeholder="+91"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink"
                  >
                    What are you looking to build or fix?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-500"
                    placeholder="A short description is fine — we'll ask the rest on the call."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-600 disabled:opacity-70"
              >
                {status === "sent" ? "Request sent" : "Get Free Consultation"}
                {status !== "sent" && (
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </button>
              {status === "sent" && (
                <p className="mt-3 text-sm text-brand-600">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
