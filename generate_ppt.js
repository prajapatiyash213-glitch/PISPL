const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pptx = new pptxgen();

// Set presentation metadata
pptx.title = "PRISHTVIK Corporate Presentation";
pptx.subject = "IT Infrastructure & Cloud Solutions";
pptx.author = "Bhavesh Makawana";
pptx.company = "PRISHTVIK Info Solutions Pvt Ltd";

// Use 16:9 widescreen layout (W: 10 inches, H: 5.625 inches)
pptx.layout = "LAYOUT_16x9";

// Define Palette Colors
const COLOR_NAVY = "0B2858";     // Dark Navy Brand Color
const COLOR_BLUE = "2D80FE";     // Primary Brand Blue
const COLOR_BG_LIGHT = "F7F9FC"; // Clean Light Gray Background
const COLOR_WHITE = "FFFFFF";
const COLOR_TEXT_DARK = "1E293B"; // Dark Slate Text
const COLOR_TEXT_MUTED = "64748B"; // Muted Gray Text
const COLOR_GREEN = "10B981";

// Helper to check if file exists before adding it (prevents crashes)
function getSafeImagePath(relPath) {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    return relPath;
  }
  console.warn(`Warning: Image not found at ${fullPath}. Skipping image embed.`);
  return null;
}

// Helper function to add a standard slide background and header
function createStandardSlide(titleText, eyebrowText) {
  const slide = pptx.addSlide();
  slide.background = { color: COLOR_BG_LIGHT };

  // Slide header background stripe
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: "100%", h: 0.1,
    fill: { color: COLOR_BLUE }
  });

  // Slide Eyebrow
  if (eyebrowText) {
    slide.addText(eyebrowText.toUpperCase(), {
      x: 0.8, y: 0.4, w: 8.4, h: 0.3,
      fontSize: 10,
      fontFace: "Arial",
      bold: true,
      color: COLOR_BLUE,
      charSpacing: 2
    });
  }

  // Slide Title
  slide.addText(titleText, {
    x: 0.8, y: 0.65, w: 8.4, h: 0.5,
    fontSize: 22,
    fontFace: "Arial",
    bold: true,
    color: COLOR_NAVY
  });

  // Footer Branding
  slide.addText("PRISHTVIK Info Solutions Pvt Ltd", {
    x: 0.8, y: 5.2, w: 5.0, h: 0.3,
    fontSize: 9,
    fontFace: "Arial",
    color: COLOR_TEXT_MUTED
  });

  slide.addText("www.pispl.co.in", {
    x: 7.2, y: 5.2, w: 2.0, h: 0.3,
    fontSize: 9,
    fontFace: "Arial",
    align: "right",
    color: COLOR_BLUE
  });

  return slide;
}

// -------------------------------------------------------------
// SLIDE 1: Hero / Title Slide (Dark Background with Hero Image)
// -------------------------------------------------------------
const slide1 = pptx.addSlide();
slide1.background = { color: COLOR_NAVY };

// Large accent block on left
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.4, h: "100%",
  fill: { color: COLOR_BLUE }
});

// Title & Subtitle Left Block
slide1.addText("PRISHTVIK", {
  x: 0.8, y: 1.1, w: 4.8, h: 0.8,
  fontSize: 48,
  fontFace: "Arial",
  bold: true,
  color: COLOR_WHITE
});

slide1.addText("INFO SOLUTIONS PVT LTD", {
  x: 0.8, y: 1.8, w: 4.8, h: 0.4,
  fontSize: 15,
  fontFace: "Arial",
  bold: true,
  color: COLOR_BLUE,
  charSpacing: 3
});

// Subtitle Divider line
slide1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 2.3, w: 4.0, h: 0.02,
  fill: { color: COLOR_WHITE },
  opacity: 30
});

// Tagline Subtitle
slide1.addText("Turnkey IT Infrastructure,\nNetworking & Cloud Solutions", {
  x: 0.8, y: 2.5, w: 4.8, h: 0.9,
  fontSize: 18,
  fontFace: "Arial",
  color: COLOR_WHITE,
  lineSpacing: 22
});

// Credentials block
slide1.addText("20+ Years Founder Experience • ISO 9001 & 27001 Certified", {
  x: 0.8, y: 3.6, w: 4.8, h: 0.3,
  fontSize: 10.5,
  fontFace: "Arial",
  color: COLOR_BLUE,
  bold: true
});

// Add floating hero-visual image on the right inside a card
const heroImg = getSafeImagePath("public/images/hero-visual.png");
if (heroImg) {
  // Background backing glass card
  slide1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.7, y: 0.8, w: 3.5, h: 3.8,
    fill: { color: COLOR_WHITE },
    opacity: 8,
    line: { color: COLOR_WHITE, width: 1, opacity: 15 }
  });
  
  slide1.addImage({
    path: heroImg,
    x: 6.0, y: 1.1, w: 2.9, h: 3.2,
    sizing: { type: "contain", w: 2.9, h: 3.2 }
  });
}

// -------------------------------------------------------------
// SLIDE 2: About Company (With Team Image)
// -------------------------------------------------------------
const slide2 = createStandardSlide("20+ Years Founder-Led Expertise", "About Prishtvik");

// Left Column - Text
slide2.addText(
  "Founded in 2006, Prishtvik Info Solutions Pvt Ltd is driven by hands-on industry experience.\n\n" +
  "We specialise in reliable, scalable and secure IT solutions built for how modern businesses actually operate.\n\n" +
  "We work as a value-added integration partner, staying fully accountable for the architecture, security, and maintenance of every infrastructure we construct.",
  {
    x: 0.8, y: 1.4, w: 4.4, h: 3.2,
    fontSize: 13,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 20
  }
);

// Right Column - Team Image
const aboutImg = getSafeImagePath("public/images/about-team.jpg") || getSafeImagePath("public/images/about-team-v2.jpg");
if (aboutImg) {
  // Photo card frame
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.6, y: 1.4, w: 3.6, h: 3.2,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });
  
  slide2.addImage({
    path: aboutImg,
    x: 5.75, y: 1.55, w: 3.3, h: 2.9,
    sizing: { type: "cover", w: 3.3, h: 2.9 }
  });
}


// -------------------------------------------------------------
// SLIDE 3: Mission, Vision & Core Values
// -------------------------------------------------------------
const slide3 = createStandardSlide("Steering Core Principles", "Mission, Vision & Values");

const principles = [
  {
    title: "OUR MISSION",
    color: COLOR_BLUE,
    x: 0.8,
    desc: "To understand our customers' unique business needs and serve as a trusted, value-added partner — delivering the right solutions that create measurable impact, drive lasting success, and foster enduring relationships."
  },
  {
    title: "OUR VISION",
    color: COLOR_NAVY,
    x: 3.8,
    desc: "To build resilient foundations for enterprises by designing scalable IT Infrastructure that evolves with our clients' goals, enabling sustainable growth through continuous innovation, right-channel approach, and trusted expertise."
  },
  {
    title: "CORE VALUES",
    color: COLOR_GREEN,
    x: 6.8,
    desc: "Success of our employees, customers, and partners through freedom of expression, transparency, inclusion, and wellness. We believe in high performance using optimum resources and keeping customization at our core."
  }
];

principles.forEach((item) => {
  // Background card
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: item.x, y: 1.4, w: 2.8, h: 3.4,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  // Top color border strip
  slide3.addShape(pptx.shapes.RECTANGLE, {
    x: item.x, y: 1.4, w: 2.8, h: 0.08,
    fill: { color: item.color }
  });

  // Title
  slide3.addText(item.title, {
    x: item.x + 0.2, y: 1.6, w: 2.4, h: 0.3,
    fontSize: 14,
    fontFace: "Arial",
    bold: true,
    color: item.color
  });

  // Description
  slide3.addText(item.desc, {
    x: item.x + 0.2, y: 2.0, w: 2.4, h: 2.6,
    fontSize: 11,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 16
  });
});


// -------------------------------------------------------------
// SLIDE 4: Founder Profile (Bhavesh Makawana)
// -------------------------------------------------------------
const slide4 = createStandardSlide("Bhavesh Makawana - Managing Director", "Founder Deck");

slide4.addText(
  "Bhavesh Makawana has been the driving force behind Prishtvik since 2006. With over two decades of hands-on technical experience, he steers the engineering and strategic vision of the enterprise.\n\n" +
  "He remains closely involved in the architecture and delivery of every major deployment, guaranteeing maximum uptime, resilience, and optimal system performance for enterprise setups.",
  {
    x: 0.8, y: 1.4, w: 4.4, h: 3.2,
    fontSize: 13,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 22
  }
);

const founderImg = getSafeImagePath("public/images/bhavesh-makawana-v2.jpg") || getSafeImagePath("public/images/bhavesh-makawana.png");
if (founderImg) {
  // Photo Frame
  slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5.6, y: 1.4, w: 3.6, h: 3.2,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  slide4.addImage({
    path: founderImg,
    x: 5.75, y: 1.55, w: 3.3, h: 2.9,
    sizing: { type: "cover", w: 3.3, h: 2.9 }
  });
}


// -------------------------------------------------------------
// SLIDE 5: Finance Director Profile (Tauseef Pathan)
// -------------------------------------------------------------
const slide5 = createStandardSlide("Tauseef Pathan - Director – Finance", "Founder Deck");

const financeImg = getSafeImagePath("public/images/Toshif khan.png");
if (financeImg) {
  // Photo Frame on the left for design variety
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.4, w: 3.6, h: 3.2,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  slide5.addImage({
    path: financeImg,
    x: 0.95, y: 1.55, w: 3.3, h: 2.9,
    sizing: { type: "cover", w: 3.3, h: 2.9 }
  });
}

slide5.addText(
  "Tauseef Pathan leads the company's financial strategy, governance, and business planning, ensuring sustainable growth and long-term value creation.\n\n" +
  "With over 10 years of experience as a Cost & Management Accountant (CMA), he brings deep expertise in budgeting, risk management, financial forecasting, compliance, and corporate governance.\n\n" +
  "He plays a pivotal role in driving financial excellence and supporting strategic decision-making across the organization.",
  {
    x: 4.8, y: 1.4, w: 4.4, h: 3.2,
    fontSize: 13,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 20
  }
);


// -------------------------------------------------------------
// SLIDE 6: Core Services & Capabilities
// -------------------------------------------------------------
const slide6 = createStandardSlide("Turnkey IT Integration Solutions", "Core Capabilities");

const sList = [
  { title: "IT Infrastructure Solutions", desc: "Turnkey infrastructure deployment, execution of major IT projects, provisioning of rack servers and high-end workstations." },
  { title: "End-User Devices Sourcing", desc: "Everyday workspace devices: source, configure and support corporate laptops, desktops, AIO systems, and network printers." },
  { title: "Networking & Structured Cabling", desc: "Resilient secure local networks built with structured copper/fiber cabling, managed switches, and network security." },
  { title: "Cloud Solutions & Storage", desc: "Deploying and managing secure workloads across cloud environments, scheduled data backups, and data protection." },
  { title: "Enterprise System Solutions", desc: "Advisory, consulting and implementation services for enterprise platforms, ERP systems, and IT policies." },
  { title: "Physical Surveillance Systems", desc: "High-density CCTV security camera layouts and physical access integration that connects cleanly with your IT environment." }
];

sList.forEach((item, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const x = 0.8 + (col * 2.9);
  const y = 1.4 + (row * 1.8);

  // Service Card
  slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.7, h: 1.6,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  // Accent marker
  slide6.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y + 0.15, w: 0.06, h: 0.3,
    fill: { color: COLOR_BLUE }
  });

  // Title
  slide6.addText(item.title, {
    x: x + 0.15, y: y + 0.15, w: 2.4, h: 0.35,
    fontSize: 11.5,
    fontFace: "Arial",
    bold: true,
    color: COLOR_NAVY
  });

  // Description
  slide6.addText(item.desc, {
    x: x + 0.15, y: y + 0.55, w: 2.4, h: 0.95,
    fontSize: 9.5,
    fontFace: "Arial",
    color: COLOR_TEXT_MUTED,
    lineSpacing: 12
  });
});


// -------------------------------------------------------------
// SLIDE 7: Why Choose Us (With Uniform Stars)
// -------------------------------------------------------------
const slide7 = createStandardSlide("Value Added Partner That Stays Accountable", "Why Choose Us");

const pillars = [
  { title: "Founder-driven", desc: "Led by engineers with two decades of experience, not a sales layer reading a catalog." },
  { title: "End-to-end execution", desc: "Design, deployment, and ongoing management handled by one accountable team." },
  { title: "Strong vendor ecosystem", desc: "Direct partnerships across leading global hardware and security brands." },
  { title: "Customised — not box movers", desc: "Solutions custom-tailored to how your business actually operates." },
  { title: "Fast support & response", desc: "Direct lines to the system builders, with response times that respect your uptime." },
  { title: "Value Addition", desc: "Delivering optimization and tangible business benefits beyond basic hardware supply." }
];

pillars.forEach((item, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const x = 0.8 + (col * 2.9);
  const y = 1.4 + (row * 1.8);

  // Card
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.7, h: 1.6,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  // Three identical stars side-by-side
  slide7.addText("★  ★  ★", {
    x: x + 0.15, y: y + 0.15, w: 1.0, h: 0.25,
    fontSize: 10,
    fontFace: "Arial",
    bold: true,
    color: COLOR_BLUE
  });

  // Title
  slide7.addText(item.title, {
    x: x + 0.15, y: y + 0.38, w: 2.4, h: 0.3,
    fontSize: 11.5,
    fontFace: "Arial",
    bold: true,
    color: COLOR_NAVY
  });

  // Description
  slide7.addText(item.desc, {
    x: x + 0.15, y: y + 0.72, w: 2.4, h: 0.75,
    fontSize: 9.5,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 12
  });
});


// -------------------------------------------------------------
// SLIDE 8: Deployments & Case Studies (With Images - Fixed Sizing)
// -------------------------------------------------------------
const slide8 = createStandardSlide("Real Infrastructure Installations", "Our Deployments");

const dList = [
  { title: "Server Installation", cat: "Infrastructure", img: "public/images/deployments/server-installation.png", x: 0.8 },
  { title: "Networking Solutions", cat: "Connectivity", img: "public/images/deployments/networking-solutions.png", x: 3.0 },
  { title: "CCTV Systems", cat: "Surveillance", img: "public/images/deployments/cctv.png", x: 5.2 },
  { title: "Corporate Office IT", cat: "Workplace Setup", img: "public/images/deployments/corporate-office.png", x: 7.4 }
];

dList.forEach((item) => {
  // Backing card
  slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: item.x, y: 1.4, w: 2.0, h: 3.3,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  // Image - set sizing contain to prevent stretching
  const imgPath = getSafeImagePath(item.img);
  if (imgPath) {
    slide8.addImage({
      path: imgPath,
      x: item.x + 0.1, y: 1.5, w: 1.8, h: 1.3,
      sizing: { type: "contain", w: 1.8, h: 1.3 }
    });
  }

  // Divider
  slide8.addShape(pptx.shapes.RECTANGLE, {
    x: item.x + 0.1, y: 2.9, w: 1.8, h: 0.01,
    fill: { color: "E2E8F0" }
  });

  // Title
  slide8.addText(item.title, {
    x: item.x + 0.1, y: 3.0, w: 1.8, h: 0.35,
    fontSize: 11,
    fontFace: "Arial",
    bold: true,
    color: COLOR_NAVY
  });

  // Category
  slide8.addText(item.cat, {
    x: item.x + 0.1, y: 3.35, w: 1.8, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    color: COLOR_BLUE,
    bold: true
  });
});


// -------------------------------------------------------------
// CLIENT LOGOS DATA (Complete 29 Clients from lib/data.ts)
// -------------------------------------------------------------
const allClients = [
  { name: "Matrix", img: "public/assets/customers/Matrix.png" },
  { name: "Schneider Electric", img: "public/assets/customers/Schneider.png" },
  { name: "TBEA", img: "public/assets/customers/TBEA.jpg" },
  { name: "Ami Lifesciences", img: "public/assets/customers/ami lifescince.png" },
  { name: "Joy e-bike", img: "public/assets/customers/joy.png" },
  { name: "Newen", img: "public/assets/customers/Newen-logo-1024x1006.webp" },
  { name: "STL", img: "public/assets/customers/stl.png" },
  { name: "Vasu Healthcare", img: "public/assets/customers/Vasu.png" },
  { name: "Rehau", img: "public/assets/customers/Rehau.png" },
  { name: "MSU Baroda", img: "public/assets/customers/msu.jpg" },
  { name: "Sumandeep Vidyapeeth", img: "public/assets/customers/sumandeep_vidyapeeth.png" },
  { name: "Parul University", img: "public/images/customers/parul_u.png" },
  { name: "Podar Education Network", img: "public/assets/customers/podar.jpg" },
  { name: "Deepak Nitrite", img: "public/images/customers/deepak_nitrite.png" },
  { name: "Technoprism", img: "public/assets/customers/technoprism.png" },
  { name: "Flydocs", img: "public/assets/customers/flydocs-brand.b6e935.svg" },
  { name: "Ward Wizard", img: "public/assets/customers/ward_wizard.png" },
  { name: "Ward Wizard Foundation", img: "public/assets/customers/ward_wizard_foundation.png" },
  { name: "Ward Wizard Medicare", img: "public/assets/customers/ward_wizard_medicare.png" },
  { name: "Ward Wizard Food & Beverages", img: "public/assets/customers/ward_wizard_foodandbeverages.png" },
  { name: "Blue Bell Insurance", img: "public/assets/customers/blue_bell.png" },
  { name: "Phazys", img: "public/assets/customers/Phazys.png" },
  { name: "Econ", img: "public/assets/customers/Econ.png" },
  { name: "EEC", img: "public/assets/customers/eec.jpg" },
  { name: "AMS", img: "public/assets/customers/ams.png" },
  { name: "Green", img: "public/assets/customers/Green.png" },
  { name: "Financial Guardian", img: "public/assets/customers/financial_guardian.png" },
  { name: "AT&T", img: "public/assets/customers/Color-ATT-Logo.jpg" },
  { name: "Margen Impex", img: "public/assets/customers/margen_impex.png" }
];

// Helper to render a page of client logos
function renderClientLogosSlide(slideTitle, subtitleText, logosArray) {
  const slide = createStandardSlide(slideTitle, subtitleText);

  logosArray.forEach((item, index) => {
    const col = index % 5;
    const row = Math.floor(index / 5);
    const x = 0.8 + (col * 1.76);
    const y = 1.4 + (row * 1.25);

    // Logo Card background
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 1.6, h: 1.1,
      fill: { color: COLOR_WHITE },
      line: { color: "E2E8F0", width: 1 }
    });

    const logoImg = getSafeImagePath(item.img);
    if (logoImg) {
      slide.addImage({
        path: logoImg,
        x: x + 0.1, y: y + 0.1, w: 1.4, h: 0.9,
        sizing: { type: "contain", w: 1.4, h: 0.9 }
      });
    } else {
      slide.addText(item.name, {
        x: x + 0.1, y: y + 0.3, w: 1.4, h: 0.5,
        fontSize: 9.5,
        fontFace: "Arial",
        bold: true,
        align: "center",
        color: COLOR_TEXT_MUTED
      });
    }
  });
}

// -------------------------------------------------------------
// SLIDE 9: Valued Corporate Clients - Page 1 (Logos 1 to 15)
// -------------------------------------------------------------
const clientsPage1 = allClients.slice(0, 15);
renderClientLogosSlide("Trusted by Leading Enterprises (1/2)", "Our Customers", clientsPage1);

// -------------------------------------------------------------
// SLIDE 10: Valued Corporate Clients - Page 2 (Logos 16 to 29)
// -------------------------------------------------------------
const clientsPage2 = allClients.slice(15);
renderClientLogosSlide("Trusted by Leading Enterprises (2/2)", "Our Customers", clientsPage2);


// -------------------------------------------------------------
// SLIDE 11: OEM Partners & Distributors
// -------------------------------------------------------------
const slide11 = createStandardSlide("Authorised Channels & Sourcing Network", "OEM Partners & Distributors");

// Row 1 Title: OEM Partners
slide11.addText("AUTHORISED OEM PARTNERS", {
  x: 0.8, y: 1.2, w: 8.4, h: 0.3,
  fontSize: 11,
  fontFace: "Arial",
  bold: true,
  color: COLOR_BLUE,
  charSpacing: 1.5
});

const partners = [
  { name: "Cisco", img: "public/images/partners/cisco.png" },
  { name: "HPE", img: "public/images/partners/hpe.png" },
  { name: "Dell", img: "public/images/partners/Dell.png" },
  { name: "Microsoft", img: "public/images/partners/microsoft.png" },
  { name: "Lenovo", img: "public/images/partners/lenovo.png" },
  { name: "ViewSonic", img: "public/images/partners/viewsonic.png" }
];

partners.forEach((item, index) => {
  const x = 0.8 + (index * 1.45);
  const y = 1.5;

  // Background frame
  slide11.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 1.3, h: 0.8,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  const partImg = getSafeImagePath(item.img);
  if (partImg) {
    slide11.addImage({
      path: partImg,
      x: x + 0.1, y: y + 0.1, w: 1.1, h: 0.6,
      sizing: { type: "contain", w: 1.1, h: 0.6 }
    });
  }
});

// Row 2 Title: Distributors
slide11.addText("PRIMARY DISTRIBUTOR NETWORKS", {
  x: 0.8, y: 2.7, w: 8.4, h: 0.3,
  fontSize: 11,
  fontFace: "Arial",
  bold: true,
  color: COLOR_BLUE,
  charSpacing: 1.5
});

const distributors = [
  { name: "Redington", img: "public/assets/distrubutors/images.png" },
  { name: "Ingram Micro", img: "public/assets/distrubutors/images (1).png" },
  { name: "Inflow Technologies", img: "public/assets/distrubutors/Inflow-Logo_Dark-color_web.png" },
  { name: "Savex Technologies", img: "public/assets/distrubutors/images.jpg" }
];

distributors.forEach((item, index) => {
  const x = 0.8 + (index * 2.2);
  const y = 3.0;

  // Background frame
  slide11.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.0, h: 0.9,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  const distImg = getSafeImagePath(item.img);
  if (distImg) {
    slide11.addImage({
      path: distImg,
      x: x + 0.1, y: y + 0.1, w: 1.8, h: 0.7,
      sizing: { type: "contain", w: 1.8, h: 0.7 }
    });
  }
});


// -------------------------------------------------------------
// SLIDE 12: Compliance & ISO Standards (Fixed Sizing)
// -------------------------------------------------------------
const slide12 = createStandardSlide("Strict Adherence to Quality Standards", "ISO Certifications");

const certs = [
  {
    num: "9001:2015",
    title: "Quality Management System",
    img: "public/assets/iso/9001.png",
    desc: "Guarantees strict operational frameworks, standardized customer feedback loops, clear project governance, and continuous service delivery audit paths."
  },
  {
    num: "27001:2022",
    title: "Information Security Management",
    img: "public/assets/iso/27001.png",
    desc: "Enforces rigid cybersecurity barriers, secure remote data handling policies, client asset access isolation, and regular security vulnerability assessments."
  }
];

certs.forEach((item, index) => {
  const x = 0.8 + (index * 4.4);

  // Card
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: 1.4, w: 4.0, h: 3.2,
    fill: { color: COLOR_WHITE },
    line: { color: "E2E8F0", width: 1 }
  });

  // ISO seal image - contain sizing
  const sealImg = getSafeImagePath(item.img);
  if (sealImg) {
    slide12.addImage({
      path: sealImg,
      x: x + 0.3, y: 1.6, w: 1.0, h: 1.0,
      sizing: { type: "contain", w: 1.0, h: 1.0 }
    });
  }

  // Number & Title block
  slide12.addText(item.num, {
    x: x + 1.5, y: 1.7, w: 2.2, h: 0.45,
    fontSize: 24,
    fontFace: "Arial",
    bold: true,
    color: COLOR_NAVY
  });

  slide12.addText(item.title, {
    x: x + 1.5, y: 2.2, w: 2.2, h: 0.3,
    fontSize: 10,
    fontFace: "Arial",
    bold: true,
    color: COLOR_BLUE
  });

  // Divider
  slide12.addShape(pptx.shapes.RECTANGLE, {
    x: x + 0.3, y: 2.8, w: 3.4, h: 0.01,
    fill: { color: "E2E8F0" }
  });

  // Description
  slide12.addText(item.desc, {
    x: x + 0.3, y: 2.95, w: 3.4, h: 1.5,
    fontSize: 11,
    fontFace: "Arial",
    color: COLOR_TEXT_DARK,
    lineSpacing: 15
  });
});


// -------------------------------------------------------------
// SLIDE 13: Contact Us & Closing (Dark Navy Background)
// -------------------------------------------------------------
const slide13 = pptx.addSlide();
slide13.background = { color: COLOR_NAVY };

// Large accent block on left
slide13.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.4, h: "100%",
  fill: { color: COLOR_BLUE }
});

// Title Text
slide13.addText("GET IN TOUCH", {
  x: 1.0, y: 0.8, w: 8.0, h: 0.4,
  fontSize: 13,
  fontFace: "Arial",
  bold: true,
  color: COLOR_BLUE,
  charSpacing: 3
});

slide13.addText("Partner With Us", {
  x: 1.0, y: 1.1, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  bold: true,
  color: COLOR_WHITE
});

// Contact Fields
const contactFields = [
  { val: "+91 9601651845", label: "Phone" },
  { val: "bhavesh.m@pisplindia.com", label: "Email Leads" },
  { val: "Vadodara, Gujarat, India", label: "Address" }
];

contactFields.forEach((item, index) => {
  const topY = 2.0 + (index * 0.9);
  
  // label
  slide13.addText(item.label.toUpperCase(), {
    x: 1.0, y: topY, w: 8.0, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    bold: true,
    color: COLOR_BLUE,
    charSpacing: 1.5
  });

  // value
  slide13.addText(item.val, {
    x: 1.0, y: topY + 0.25, w: 8.0, h: 0.4,
    fontSize: 16,
    fontFace: "Arial",
    bold: true,
    color: COLOR_WHITE
  });
});

slide13.addText("Let's scope your next infrastructure project.", {
  x: 1.0, y: 4.8, w: 8.0, h: 0.4,
  fontSize: 12,
  fontFace: "Arial",
  italic: true,
  color: COLOR_TEXT_MUTED
});


// -------------------------------------------------------------
// SAVE PRESENTATION
// -------------------------------------------------------------
const outputPath = path.join(__dirname, 'PRISHTVIK_Company_Profile.pptx');
pptx.writeFile({ fileName: outputPath })
  .then((fileName) => {
    console.log(`Presentation generated successfully: ${fileName}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error writing PPTX file:", err);
    process.exit(1);
  });
