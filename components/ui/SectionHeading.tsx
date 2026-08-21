import RevealOnScroll from "@/components/ui/RevealOnScroll";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center mx-auto max-w-2xl" : ""}>
      <RevealOnScroll>
        <div
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span
            className={`h-px w-8 ${dark ? "bg-brand-400" : "bg-brand-500"}`}
          />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-brand-300" : "text-brand-600"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <h2
          className={`mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll delay={0.16}>
          <p
            className={`mt-4 text-balance text-base leading-relaxed md:text-lg ${
              dark ? "text-slate-200/80" : "text-slate-500"
            }`}
          >
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
