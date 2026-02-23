// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "ASERY | Developer & Music Producer",
  description: "Jani - 19 year old developer, music producer, and content creator from Hungary. Crafting bold digital experiences with relentless energy.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "ASERY",
  items: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Setup", href: "#services" },
    { label: "Beats", href: "#works" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "ASERY",
  subtitle: "Developer | Music Producer | Content Creator",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Code | Beats | Create",
  copyright: "© 2025 ASERY",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Crafting bold digital experiences",
  titleLine2: "with relentless energy and passion.",
  description: "I'm Jani, known as ASERY. I'm 19 years old from Nyíregyháza, Hungary. A high school developer mastering code and design. When I'm not coding, I'm producing music, streaming, or staying active. Passionate about turning creative ideas into reality across all disciplines.",
  image1: "/about-1.jpg",
  image1Alt: "ASERY workspace",
  image2: "/about-2.jpg",
  image2Alt: "Creative process",
  authorImage: "/photographer.jpg",
  authorName: "Jani (ASERY)",
  authorBio: "Developer | Music Producer | Content Creator - Building code, creating beats, pushing boundaries.",
};

// ============================================================================
// Works Section Configuration - Now Beats Store
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  bpm: number;
  key: string;
  purchaseLink: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Beat Store",
  subtitle: "Premium beats for your next project. Click to purchase exclusive rights.",
  projects: [
    { 
      id: 1, 
      title: "Frequency Shift", 
      category: "Electronic", 
      image: "/work-1.jpg",
      price: 49,
      bpm: 140,
      key: "F# Minor",
      purchaseLink: "https://discord.gg/FKFNXyxmnn"
    },
    { 
      id: 2, 
      title: "Neon Dreams", 
      category: "Ambient", 
      image: "/work-2.jpg",
      price: 39,
      bpm: 85,
      key: "A Major",
      purchaseLink: "https://discord.gg/FKFNXyxmnn"
    },
    { 
      id: 3, 
      title: "Digital Pulse", 
      category: "Trap", 
      image: "/work-3.jpg",
      price: 59,
      bpm: 150,
      key: "D Minor",
      purchaseLink: "https://discord.gg/FKFNXyxmnn"
    },
    { 
      id: 4, 
      title: "Void Walker", 
      category: "Synthwave", 
      image: "/work-4.jpg",
      price: 45,
      bpm: 128,
      key: "E Minor",
      purchaseLink: "https://discord.gg/FKFNXyxmnn"
    },
  ],
};

// ============================================================================
// Services Section Configuration - Used for Setup/Gear
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "My Interdimensional Arsenal",
  subtitle: "The tools and gear that power my creative workflow.",
  services: [
    { 
      id: "01", 
      title: "CPU - Ryzen 7 9800X3D", 
      description: "High-performance processor for rendering and production",
      image: "/service-1.jpg" 
    },
    { 
      id: "02", 
      title: "GPU - RTX 5070Ti", 
      description: "Graphics powerhouse for creative workflows",
      image: "/service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Peripherals Setup", 
      description: "Razer, Logitech & Steelseries gear for precision",
      image: "/service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Audio Equipment", 
      description: "Professional mic and mixer for crystal clear sound",
      image: "/service-4.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration - Used for Skills
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Skills & Expertise",
  testimonials: [
    { 
      id: 1, 
      name: "Web Development", 
      title: "Frontend & Design",
      quote: "HTML & CSS, JavaScript, React, Web Design, Responsive Design, Git & GitHub",
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Music Production", 
      title: "Electronic & Trap",
      quote: "Creating beats, mixing tracks, and producing sonic experiences across multiple genres.",
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Content Creation", 
      title: "Streaming & Video",
      quote: "Building communities through engaging content on Twitch, YouTube, and social platforms.",
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration - Now Experience Timeline
// ============================================================================

export interface ExperienceItem {
  id: number;
  title: string;
  period: string;
  description: string;
  details: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  experiences: ExperienceItem[];
}

export const pricingConfig: PricingConfig = {
  title: "Experience",
  subtitle: "My journey in development and creative fields.",
  experiences: [
    { 
      id: 1, 
      title: "Education", 
      period: "2021 - Present",
      description: "Nyíregyházi SZC Széchényi István Technikum és Kollégium",
      details: [
        "Started technical school journey",
        "Learning HTML, CSS, JavaScript",
        "Python & Java programming",
        "Web development fundamentals"
      ]
    },
    { 
      id: 2, 
      title: "Erasmus+ Internship", 
      period: "May 2025",
      description: "Tenerife, Spain",
      details: [
        "Worked with international team",
        "3D Car Model Design project",
        "Team collaboration experience",
        "Global networking opportunity"
      ]
    },
    { 
      id: 3, 
      title: "Music Production", 
      period: "2020 - Present",
      description: "Independent Artist",
      details: [
        "Electronic music production",
        "Trap and Synthwave beats",
        "Sound design & mixing",
        "Releasing on multiple platforms"
      ]
    },
  ],
};

// ============================================================================
// FAQ Section Configuration - Hidden (empty)
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "",
  faqs: [],
};

// ============================================================================
// Blog Section Configuration - Hidden (empty)
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "",
  subtitle: "",
  allPostsLabel: "",
  readMoreLabel: "",
  readTimePrefix: "",
  posts: [],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Get In Touch",
  subtitle: "Open a channel. Whether you seek to collaborate on projects or simply wish to communicate about development, music production, or creative work — I await your transmission.",
  nameLabel: "Your Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Project Type",
  projectTypePlaceholder: "",
  projectTypeOptions: [],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Building Code Creating Beats Pushing Boundaries",
  marqueeHighlightChars: ["C", "B", "P"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Setup", href: "#services" },
  ],
  navLinks2: [
    { label: "Instagram", href: "https://instagram.com/szlgy_janos", icon: "Instagram" },
    { label: "TikTok", href: "https://tiktok.com/@szlgy_janos", icon: "Instagram" },
    { label: "Twitter", href: "https://twitter.com/AseryTTV", icon: "Instagram" },
    { label: "Twitch", href: "https://twitch.tv/a_s_e_r_y_", icon: "Instagram" },
    { label: "GitHub", href: "https://github.com/Janeszkoo", icon: "Instagram" },
    { label: "YouTube", href: "https://youtube.com/@aseryvl", icon: "Instagram" },
    { label: "Discord", href: "https://discord.gg/FKFNXyxmnn", icon: "Instagram" },
  ],
  ctaText: "Connect",
  ctaHref: "#contact",
  copyright: "© 2025 ASERY. All rights reserved.",
  tagline: "Made with passion by Jani",
};
