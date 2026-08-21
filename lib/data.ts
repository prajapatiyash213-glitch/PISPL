// ---------------------------------------------------------------------------
// Content data for the PISPL India Pvt Ltd website.
// Sourced from "PISPL_Website_Strategy_and_Review.docx" (Part 1 recommended
// structure). Keeping copy in one typed module makes it trivial to hand off
// to a CMS later without touching component code.
// ---------------------------------------------------------------------------

export const company = {
  name: "Prishtvik Info Solutions Pvt Ltd",
  shortName: "Prishtvik",
  tagline: "IT Infrastructure | Networking | Cloud Solutions",
  since: 2006,
  phone: "+91 9601651845",
  email: "bhavesh.m@pisplindia.com",
  address: "Vadodara, Gujarat, India",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Brands", href: "/#brands" },
  { label: "Customers", href: "/#customers" },
  { label: "Contact Us", href: "/#contact" },
];

export const heroStats = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 30000, suffix: "+", label: "Support Calls Handled" },
  { value: 20, suffix: "+", label: "Corporate Clients" },
  { value: 30, suffix: "+", label: "OEM Partners" },
  { value: 100, prefix: "₹", suffix: "M+", label: "Revenue Generated" },
];

export const aboutPoints = [
  { value: "20+", label: "Years of founder experience" },
  { value: "10+", label: "Years running business operations" },
  { value: "100%", label: "Founder-led execution" },
  { value: "Turnkey", label: "Project capability, start to finish" },
];

export type ServiceGroup = {
  id: string;
  letter: string;
  title: string;
  description: string;
  items: string[];
};

export const services: ServiceGroup[] = [
  {
    id: "infrastructure",
    letter: "A",
    title: "IT Infrastructure Solutions",
    description:
      "Turnkey infrastructure builds, planned and executed end-to-end by our own engineering team.",
    items: [
      "Turnkey IT infrastructure deployment",
      "Execution & management of IT projects",
      "Rack servers & high-end workstations",
    ],
  },
  {
    id: "end-user-devices",
    letter: "B",
    title: "End-User Devices",
    description:
      "The everyday hardware your teams depend on, sourced, configured and supported.",
    items: ["Laptops, desktops & AIO systems", "Printers & accessories"],
  },
  {
    id: "networking",
    letter: "C",
    title: "Networking Solutions",
    description:
      "Resilient, secure networks built to carry your business without interruption.",
    items: [
      "Firewall & network security",
      "Managed switches",
      "Structured cabling",
    ],
  },
  {
    id: "cybersecurity-cloud",
    letter: "D",
    title: "Cloud Solutions",
    description:
      "Deploying, scaling, and managing secure workloads across cloud environments.",
    items: [
      "Cloud deployment & management",
      "Data protection & cloud backup",
      "Secure hosting & infrastructure scale",
    ],
  },
  {
    id: "enterprise",
    letter: "E",
    title: "Enterprise Solutions",
    description:
      "Advisory and implementation for the systems that run the business.",
    items: ["ERP implementation", "IT policy advisory & consultancy"],
  },
  {
    id: "surveillance",
    letter: "F",
    title: "Surveillance & Security",
    description:
      "Physical security that integrates cleanly with your IT environment.",
    items: ["CCTV & surveillance systems", "Integrated security solutions"],
  },
];

export const whyChooseUs = [
  {
    title: "Founder-driven",
    description:
      "Every engagement is led by people with two decades in the field — not a sales layer reading from a catalogue.",
  },
  {
    title: "End-to-end execution",
    description:
      "Design, deployment and ongoing management, handled by one accountable team from day one.",
  },
  {
    title: "Strong vendor ecosystem",
    description:
      "Established relationships across leading hardware and security vendors, built over 20+ years.",
  },
  {
    title: "Customised – not box movers",
    description:
      "Solutions scoped to how your business actually operates — not a standard package with your logo on it.",
  },
  {
    title: "Fast support & accountability",
    description:
      "Direct lines to the people who built your infrastructure, with response times that respect your uptime.",
  },
  {
    title: "Value Addition",
    description:
      "Delivering optimization, cost-efficiency, and tangible business benefits beyond basic hardware supply.",
  },
];

export const industries = [
  { name: "Manufacturing", detail: "Plant-floor networks & production-grade uptime" },
  { name: "Pharma", detail: "Compliant, clean-room systems & strict data integrity" },
  { name: "Corporates", detail: "High-density workplace connectivity & uptime stability" },
  { name: "SMEs", detail: "Right-sized IT infrastructure that scales as you grow" },
  { name: "Education", detail: "Secure campus networks & classroom technology" },
  { name: "Government", detail: "Highly secure, compliant infrastructure & enterprise systems" },
];

export type Deployment = {
  title: string;
  category: string;
  image: string;
};

export const deployments: Deployment[] = [
  {
    title: "Server Installation",
    category: "Infrastructure Deployment",
    image: "/images/deployments/server-installation.png",
  },
  {
    title: "UPS Installation",
    category: "Power Infrastructure",
    image: "/images/deployments/ups-installation.png",
  },
  {
    title: "Networking Solutions",
    category: "Networking & Connectivity",
    image: "/images/deployments/networking-solutions.png",
  },
  {
    title: "CCTV",
    category: "Security & Surveillance",
    image: "/images/deployments/cctv.png",
  },
  {
    title: "Complex Solutions",
    category: "Enterprise Systems",
    image: "/images/deployments/complex-solutions.png",
  },
  {
    title: "Large Venue Projector Solution",
    category: "Audio-Visual Setup",
    image: "/images/deployments/projector-solution.png",
  },
  {
    title: "VC Solutions",
    category: "Video Conferencing",
    image: "/images/deployments/vc-solutions.png",
  },
  {
    title: "Corporate Office",
    category: "Workspace Deployment",
    image: "/images/deployments/corporate-office.png",
  },
];

export const clientLogos = [
  { name: "Matrix", src: "/assets/customers/Matrix.png" },
  { name: "Technoprism", src: "/assets/customers/technoprism.png" },
  { name: "TBEA", src: "/assets/customers/TBEA.jpg" },
  { name: "Ami Lifesciences", src: "/assets/customers/ami lifescince.png" },
  { name: "Flydocs", src: "/assets/customers/flydocs-brand.b6e935.svg" },
  { name: "Schneider Electric", src: "/assets/customers/Schneider.png" },
  { name: "Ward Wizard", src: "/assets/customers/ward_wizard.png" },
  { name: "Ward Wizard Foundation", src: "/assets/customers/ward_wizard_foundation.png" },
  { name: "Ward Wizard Medicare", src: "/assets/customers/ward_wizard_medicare.png" },
  { name: "Ward Wizard Food & Beverages", src: "/assets/customers/ward_wizard_foodandbeverages.png" },
  { name: "Joy e-bike", src: "/assets/customers/joy.png" },
  { name: "Blue Bell Insurance", src: "/assets/customers/blue_bell.png" },
  { name: "Newen", src: "/assets/customers/Newen-logo-1024x1006.webp" },
  { name: "STL", src: "/assets/customers/stl.png" },
  { name: "Phazys", src: "/assets/customers/Phazys.png" },
  { name: "Econ", src: "/assets/customers/Econ.png" },
  { name: "Vasu Healthcare", src: "/assets/customers/Vasu.png" },
  { name: "Rehau", src: "/assets/customers/Rehau.png" },
  { name: "EEC", src: "/assets/customers/eec.jpg" },
  { name: "MSU Baroda", src: "/assets/customers/msu.jpg" },
  { name: "Sumandeep Vidyapeeth", src: "/assets/customers/sumandeep_vidyapeeth.png" },
  { name: "Parul University", src: "/images/customers/parul_u.png" },
  { name: "Podar Education", src: "/assets/customers/podar.jpg" },
  { name: "AMS", src: "/assets/customers/ams.png" },
  { name: "Green", src: "/assets/customers/Green.png" },
  { name: "Financial Guardian", src: "/assets/customers/financial_guardian.png" },
  { name: "AT&T", src: "/assets/customers/Color-ATT-Logo.jpg" },
  { name: "Deepak Nitrite", src: "/assets/customers/deepak_nitrite.png" },
  { name: "Margen Impex", src: "/assets/customers/margen_impex.png" }
];

export const distributorLogos = [
  { name: "Redington", src: "/assets/distrubutors/images.png" },
  { name: "Ingram Micro", src: "/assets/distrubutors/images (1).png" },
  { name: "Inflow Technologies", src: "/assets/distrubutors/Inflow-Logo_Dark-color_web.png" },
  { name: "Savex Technologies", src: "/assets/distrubutors/images.jpg" },
];

export const partnerLogos = [
  { name: "Cisco", src: "/images/partners/cisco.png" },
  { name: "HPE", src: "/images/partners/hpe.png" },
  { name: "Asus", src: "/images/partners/asus.png" },
  { name: "Microsoft", src: "/images/partners/microsoft.png" },
  { name: "BenQ", src: "/images/partners/benq.svg" },
  { name: "Sophos", src: "/images/partners/sophos.png" },
  { name: "APC", src: "/images/partners/apc.png" },
  { name: "Dell", src: "/images/partners/dell.png", heightClass: "h-[30px]" },
  { name: "Lenovo", src: "/images/partners/lenovo.png" },
  { name: "ViewSonic", src: "/images/partners/viewsonic.png" },
];

export const heroPartnerLogos = [
  { name: "Asus", src: "/images/partners/asus.png", heightClass: "h-5" },
  { name: "HPE", src: "/images/partners/hpe.png", heightClass: "h-[30px]" },
  { name: "Dell", src: "/images/partners/dell.svg", heightClass: "h-[36px]" },
  { name: "Microsoft", src: "/images/partners/microsoft.png", heightClass: "h-[22px]" },
  { name: "BenQ", src: "/images/partners/benq.svg", heightClass: "h-[30px]" },
  { name: "Sophos", src: "/images/partners/sophos.png", heightClass: "h-[22px]" },
];

export const testimonials = [
  {
    quote:
      "PISPL planned our entire office network and rollout without a single day of downtime during the switch-over. Support has stayed just as responsive since.",
    name: "IT Head",
    role: "Manufacturing sector client",
  },
  {
    quote:
      "What stood out was ownership — one team handled design, procurement and install, and stayed accountable after go-live.",
    name: "Operations Director",
    role: "Logistics sector client",
  },
  {
    quote:
      "Straightforward, technically sound, and none of the reseller upsell we'd dealt with before. Exactly what a growing office needed.",
    name: "Admin Manager",
    role: "Corporate office client",
  },
];

export const founderMessage = {
  quote:
    "With decades of hands-on experience, we ensure every project is executed with precision, reliability, and long-term vision.",
  attribution: "Founder, PISPL India Pvt Ltd",
};
