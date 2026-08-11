export const profile = {
  name: "Kartik Rohilla",
  brand: "Kartik Codes",
  title: "Software Engineer",
  location: "Delhi NCR, India",
  email: "rohillakartik6@gmail.com",
  tagline: "Building clean, reliable web apps with React and .NET.",
  summary:
    "Software engineer with 4+ years shipping full-stack products — from React frontends to .NET APIs, MySQL, and Azure. I care about readable code, solid fundamentals, and interfaces that feel fast.",
  links: {
    github: "https://github.com/rohillakartik6",
    linkedin: "https://www.linkedin.com/in/kartik-codes",
    youtube: "https://www.youtube.com/channel/UC4gssBp0ShpoZ932ifJxJNw",
    email: "mailto:rohillakartik6@gmail.com",
  },
};

export const experience = [
  {
    role: "Lead Software Engineer",
    company: "Sopra Steria",
    location: "Noida",
    period: "Sep 2025 — Dec 2025",
    highlights: [
      "Led React.js frontend development for enterprise applications",
      "Integrated REST APIs and improved UI performance",
      "Ran code reviews and debugging across the frontend stack",
    ],
  },
  {
    role: "Senior Engineer",
    company: "IKS Health",
    location: "Mumbai",
    period: "May 2024 — Sep 2025",
    highlights: [
      "Delivered features for healthcare technology platforms as a senior engineer",
      "Collaborated with cross-functional teams on reliable, production-ready UI and services",
      "Strengthened code quality through reviews, debugging, and iterative delivery",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Mind IT Systems",
    location: "Delhi, India",
    period: "Sep 2021 — Apr 2024",
    highlights: [
      "Built and maintained applications with .NET, C#, React.js, and MySQL",
      "Worked with Azure for deployment and cloud-hosted services",
      "Grew from fundamentals into full-stack delivery across APIs and SPA clients",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Indira Gandhi National Open University (IGNOU)",
    focus: "Computer Software Engineering",
    period: "2021 — 2023",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Indira Gandhi National Open University (IGNOU)",
    focus: "Computer Science",
    period: "2016 — 2020",
  },
];

export const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  Backend: ["C#", ".NET / .NET Core", "REST APIs", "Entity Framework", "FluentValidation"],
  Data: ["MySQL", "SQL optimization", "LINQ"],
  Cloud: ["Azure", "Deployment", "MSAL / Auth flows"],
  Practices: ["Code reviews", "Debugging", "SOLID", "Async/await", "System design"],
};

export const projects = [
  {
    title: "CRUD Application (API + SPA)",
    description:
      "Full-stack CRUD stack with a C#/.NET API and a JavaScript SPA client — create, read, update, and delete flows end to end.",
    tags: ["C#", ".NET", "JavaScript", "REST"],
    links: [
      { label: "API", href: "https://github.com/rohillakartik6/CrudApplicationApi" },
      { label: "SPA", href: "https://github.com/rohillakartik6/CrudApplicationSPA" },
    ],
  },
  {
    title: "SuperHeros API",
    description:
      "Practice Web API covering GET, POST, and PUT endpoints — focused on clean controller patterns and resource handling.",
    tags: ["C#", "ASP.NET", "REST"],
    links: [{ label: "GitHub", href: "https://github.com/rohillakartik6/SuperHerosApi" }],
  },
  {
    title: "FluentValidation in Web API",
    description:
      ".NET Core 6 API demo applying FluentValidation for request validation and clearer API contracts.",
    tags: [".NET 6", "FluentValidation", "C#"],
    links: [
      { label: "GitHub", href: "https://github.com/rohillakartik6/FluentValidationInWebAPi" },
    ],
  },
  {
    title: "Stroke Art",
    description:
      "Visual CSS experiment exploring expressive stroke-based art and motion on the web.",
    tags: ["CSS", "Creative coding"],
    links: [{ label: "GitHub", href: "https://github.com/rohillakartik6/stroke-art" }],
  },
  {
    title: "Five Planets",
    description:
      "Responsive page animating rotations of Earth, Mars, Jupiter, Saturn, and Uranus.",
    tags: ["HTML", "CSS", "Animation"],
    links: [{ label: "GitHub", href: "https://github.com/rohillakartik6/Five-Planets" }],
  },
  {
    title: "Simon Game",
    description:
      "Classic Simon memory game built with JavaScript — pattern recall, feedback, and progressive difficulty.",
    tags: ["JavaScript", "Game"],
    links: [{ label: "GitHub", href: "https://github.com/rohillakartik6/Simon-Game" }],
  },
];
