/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to change almost everything on the website:
 *  your details, skills, projects, experience, services, links.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Kaleem Ullah",
  title: "Full-Stack Web Developer",
  // Used for metadata / sitemap / social cards. Set NEXT_PUBLIC_SITE_URL in
  // your hosting dashboard (or a .env.local file) once you have a domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Kaleem Ullah is a Full-Stack Web Developer specialising in PHP and Laravel, with frontend experience in React.js and Next.js. Available for web development projects.",
  // "Approximately 2 years" as you stated. Your CV dates (Jan 2025 onward) add
  // up to a little under 2 years - change this label if you prefer.
  experienceLabel: "2 years",
};

export const contact = {
  email: "kaleemullahwebdeveloper@gmail.com",
  phonePK: "+923297833182",
  phonePKDisplay: "+92 329 7833182",
  phoneAE: "+971545455449",
  phoneAEDisplay: "+971 54 545 5449",
  github: "https://github.com/kaleem-webdev",
  githubHandle: "kaleem-webdev",
  // Paste your full LinkedIn profile URL, e.g. "https://www.linkedin.com/in/your-name".
  // While this is empty, LinkedIn is not shown anywhere on the site.
  linkedin: "https://www.linkedin.com/in/kaleem-ullah-40614b363",
  linkedinLabel: "linkedin.com/in/kaleem-ullah-40614b363",
  // Floating WhatsApp button (bottom-right). Digits only, with country code.
  // Set to "" to hide the button.
  whatsapp: "923297833182",
  whatsappMessage: "Hi Kaleem, I found your portfolio and would like to talk about a project.",
  // Optional: paste a form-endpoint URL (e.g. from Formspree or Web3Forms) to
  // make the contact form send real messages. While this is empty the form
  // opens the visitor's email app with the message pre-filled instead, and
  // never claims the message was delivered.
  formEndpoint: "",
};

/** Put your CV at public/cv/Kaleem_Ullah_CV.pdf (already included). */
export const cvPath = "/cv/Kaleem_Ullah_CV.pdf";

/** Swap public/images/kaleem-portrait.jpg to change your photo. */
export const portrait = {
  src: "/images/kaleem-portrait.jpg",
  alt: "Portrait of Kaleem Ullah",
  width: 800,
  height: 1000,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack web developer who enjoys building database-driven web applications, with PHP and Laravel at the centre of my work. I've spent about two years shipping real projects, from the first interface build through backend logic to live deployment.",
    "On the backend I work with Laravel's MVC structure, MySQL, authentication and API integration. On the frontend I turn designs into responsive interfaces with HTML, CSS, JavaScript, React.js and Next.js that hold up across browsers and screen sizes.",
    "I like solving problems at the root, whether that's tracing a data issue in the database or untangling an awkward layout, and I care about writing clean, maintainable code that the next developer can actually read.",
  ],
  highlights: [
    { label: "Primary stack", value: "PHP · Laravel" },
    { label: "Frontend", value: "React · Next.js" },
    { label: "Database", value: "MySQL" },
    { label: "Based in", value: "Lahore, Pakistan" },
  ],
};

/**
 * Skills are listed by category only - no percentages or progress bars.
 * Remove anything you are not comfortable being asked about in an interview.
 */
export const skillGroups = [
  {
    title: "Backend",
    icon: "server",
    items: [
      "PHP",
      "Laravel",
      "Livewire",
      "REST APIs",
      "MVC architecture",
      "CRUD",
      "Authentication & authorization",
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Responsive design",
    ],
  },
  {
    title: "Database",
    icon: "database",
    items: ["MySQL", "SQL queries", "Database design", "Relationships"],
  },
  {
    title: "Tools & other knowledge",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "WordPress",
      "Web hosting",
      "Domain management",
      "DNS",
      "WebSockets",
      "SEO fundamentals",
    ],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Which built-in thumbnail to show. Replace with `image` for a real screenshot. */
  thumb: "web" | "dashboard" | "pos" | "wordpress" | "api";
  /** Path to a real screenshot in /public, e.g. "/images/projects/my-app.jpg". */
  image?: string;
  /** Add real URLs to enable the buttons. Leave "" to keep them disabled. */
  liveUrl: string;
  sourceUrl: string;
  /** Set to false once the entry describes a real project of yours. */
  placeholder: boolean;
};

/**
 * Real projects. To add one: copy an entry, put its screenshot in
 * public/images/projects/, and fill in the fields. `tags` currently describe
 * the kind of work only - replace them with the exact stack you used
 * (e.g. "Laravel", "WordPress", "MySQL"). Leave `sourceUrl` empty for client
 * work with no public repository (the Source Code button is then hidden).
 */
export const projects: Project[] = [
  {
    title: "Nashville Airport Limo",
    description:
      "Website for a Nashville luxury limo and chauffeur service, with booking, services, fleet and blog pages.",
    tags: ["Business website", "Responsive design"],
    thumb: "web",
    image: "/images/projects/nashville-airports-limo.webp",
    liveUrl: "https://nashvilleairportslimo.com/",
    sourceUrl: "",
    placeholder: false,
  },
  {
    title: "Atlanta Classic Limo",
    description:
      "Website for an Atlanta limousine company showcasing its fleet for corporate rides, celebrations and airport transfers.",
    tags: ["Business website", "Responsive design"],
    thumb: "web",
    image: "/images/projects/atlanta-classic-limo.webp",
    liveUrl: "https://atlantaclassiclimo.com/",
    sourceUrl: "",
    placeholder: false,
  },
  {
    title: "Florida Airport Limo",
    description:
      "Website for a Florida limousine and chauffeur service covering airport, corporate, wedding and group transportation.",
    tags: ["Business website", "Responsive design"],
    thumb: "web",
    image: "/images/projects/florida-airport-limo.webp",
    liveUrl: "https://floridaairportlimo.com/",
    sourceUrl: "",
    placeholder: false,
  },
  {
    title: "ATL Airports Limo",
    description:
      "Website for private airport transportation to and from Hartsfield-Jackson Atlanta International Airport, with a simple booking flow.",
    tags: ["Business website", "Responsive design"],
    thumb: "web",
    image: "/images/projects/atl-airports-limo.webp",
    liveUrl: "https://atlairportslimo.com/",
    sourceUrl: "",
    placeholder: false,
  },
  {
    title: "Smart Fixora Technical Services",
    description:
      "Website for a Dubai handyman and technical services company covering AC repair, plumbing, electrical work and cleaning, with call and WhatsApp buttons.",
    tags: ["Business website", "Responsive design"],
    thumb: "web",
    image: "/images/projects/smart-fixora.webp",
    // Add the live URL here to enable the Live Demo button.
    liveUrl: "https://smartfixora.com/",
    sourceUrl: "",
    placeholder: false,
  },
];

/**
 * Roles and responsibilities below come from your CV (2026). Edit freely.
 */
export const experience = [
  {
    role: "Web Developer",
    company: "BM Global",
    period: "Dec 2025 – Aug 2026",
    points: [
      "Owned Laravel MVC modules from requirements through to deployment, building Blade-templated interfaces with HTML, CSS, Bootstrap and JavaScript.",
      "Built a complete contact-form submission flow, including backend validation and processing.",
      "Introduced Livewire into static pages to make them dynamic without full page reloads.",
      "Worked directly in the database layer to track down and fix data and functionality issues on live client projects.",
      "Grew from mostly frontend work into full Laravel development, taking on more backend responsibility over time.",
    ],
  },
  {
    role: "Web Developer",
    company: "IT Genesis",
    period: "May 2025 – Dec 2025",
    points: [
      "Worked across the stack on active projects: frontend features in HTML, CSS, JavaScript and Bootstrap, plus the form handling and database operations behind them.",
      "Maintained and improved existing production applications without breaking what already worked.",
      "Collaborated in a cross-functional team to deliver scalable features on deadline.",
    ],
  },
  {
    role: "Web Developer (Executive Internship)",
    company: "Murick Technologies",
    period: "Jan 2025 – May 2025",
    points: [
      "Built and maintained frontend interfaces with HTML, CSS, JavaScript and Bootstrap in my first professional web development role.",
      "Created a small library of reusable UI components the team kept using on other pages.",
      "Worked closely with designers and backend developers so frontend work fit cleanly into the wider application.",
      "Caught bugs and styling inconsistencies before release.",
    ],
  },
];

export const education = {
  degree: "BS in Computer Science (in progress)",
  school: "Virtual University of Pakistan",
};

export const services = [
  {
    title: "Custom Website Development",
    icon: "globe",
    description:
      "Tailored websites and web applications built around your goals, from planning through to launch.",
  },
  {
    title: "Laravel Backend Development",
    icon: "server",
    description:
      "Structured, maintainable Laravel back ends with clean MVC architecture, authentication and MySQL databases.",
  },
  {
    title: "REST API Development & Integration",
    icon: "plug",
    description:
      "APIs that are easy to consume, plus integration with third-party services and your existing systems.",
  },
  {
    title: "Responsive Frontend Development",
    icon: "smartphone",
    description:
      "Fast, accessible interfaces in HTML, CSS, JavaScript, React.js or Next.js that work on every screen.",
  },
  {
    title: "Website Maintenance & Improvements",
    icon: "settings",
    description:
      "Bug fixes, performance tweaks and new features for existing sites, without breaking what already works.",
  },
  {
    title: "WordPress Website Development",
    icon: "layers",
    description:
      "WordPress sites set up, customised and optimised for search, with hosting and domain support.",
  },
] as const;
