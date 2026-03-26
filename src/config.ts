// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "ASERY | Developer & Music Producer",
  description: "Code | Beats | Create - Crafting bold digital experiences with relentless energy and passion. 19-year-old developer and music producer from Nyíregyháza, Hungary.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "ASERY",
  decodeText: "ASERY",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  subtitle: "Developer | Music Producer | Content Creator",
  ctaPrimary: "Explore Beats",
  ctaPrimaryTarget: "albums",
  ctaSecondary: "Get in Touch",
  ctaSecondaryTarget: "contact",
  cornerLabel: "CODE | BEATS | CREATE",
  cornerDetail: "Nyíregyháza, Hungary",
  navItems: [
    { label: "Beats", sectionId: "albums", icon: "disc" },
    { label: "Gallery", sectionId: "gallery", icon: "play" },
    { label: "Setup", sectionId: "tour", icon: "calendar" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    { id: 1, title: "FREQUENCIES", subtitle: "Trap | 133 BPM | F Minor", image: "/album-1.jpg" },
    { id: 2, title: "POISON", subtitle: "Trap | 170 BPM | F# Minor", image: "/album-2.jpg" },
    { id: 3, title: "OUT OF THE ORDINARY", subtitle: "Afrobeat | 90 BPM | A Minor", image: "/album-3.jpg" },
    { id: 4, title: "TRILHA", subtitle: "Trap | 115 BPM | F# Minor", image: "/album-4.jpg" },
  ],
  cubeTextures: [
    "/album-1.jpg", // right
    "/album-2.jpg", // left
    "/album-3.jpg", // top
    "/album-4.jpg", // bottom
    "/album-5.jpg", // front
    "/album-6.jpg", // back
  ],
  scrollHint: "Scroll to explore beats",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "CREATIVE JOURNEY",
  sectionTitle: "Building Code | Creating Beats",
  galleryLabel: "VISUAL WORKFLOW",
  galleryTitle: "Pushing Boundaries",
  marqueeTexts: [
    "BUILDING CODE",
    "CREATING BEATS",
    "PUSHING BOUNDARIES",
    "DEVELOPER LIFE",
    "MUSIC PRODUCTION",
    "CONTENT CREATION",
  ],
  endCtaText: "Listen the masterpieces",
  parallaxImagesTop: [
    { id: 1, src: "/concert-1.jpg", alt: "Music production setup" },
    { id: 2, src: "/concert-2.jpg", alt: "Coding workspace" },
    { id: 3, src: "/concert-3.jpg", alt: "Creative workflow" },
    { id: 4, src: "/concert-4.jpg", alt: "Studio environment" },
    { id: 5, src: "/concert-5.jpg", alt: "Development setup" },
    { id: 6, src: "/concert-6.jpg", alt: "Music creation" },
  ],
  parallaxImagesBottom: [
    { id: 7, src: "/concert-7.jpg", alt: "Streaming setup" },
    { id: 8, src: "/concert-8.jpg", alt: "Audio equipment" },
    { id: 9, src: "/concert-9.jpg", alt: "Creative process" },
    { id: 10, src: "/concert-10.jpg", alt: "Digital workspace" },
    { id: 11, src: "/concert-11.jpg", alt: "Neon aesthetics" },
    { id: 12, src: "/concert-12.jpg", alt: "Tech environment" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-1.jpg", title: "Frequency Shift", date: "Electronic" },
    { id: 2, src: "/gallery-2.jpg", title: "Neon Dreams", date: "Ambient" },
    { id: 3, src: "/gallery-3.jpg", title: "Digital Pulse", date: "Trap" },
    { id: 4, src: "/gallery-4.jpg", title: "Void Walker", date: "Synthwave" },
    { id: 5, src: "/gallery-5.jpg", title: "Studio Sessions", date: "Production" },
    { id: 6, src: "/gallery-6.jpg", title: "Live Stream", date: "Content" },
  ],
};

// -- Tour Schedule Section ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
  url?: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "MY INTERDIMENSIONAL ARSENAL",
  sectionTitle: "Tools & Gear",
  vinylImage: "/vinyl.png",
  buyButtonText: "Learn More",
  detailsButtonText: "Specs",
  bottomNote: "The tools that power my creative workflow",
  bottomCtaText: "Full Setup Details",
  statusLabels: {
    onSale: "ACTIVE",
    soldOut: "UPGRADE",
    comingSoon: "WISHLIST",
    default: "TBA",
  },
  tourDates: [
    {
      id: 1,
      date: "CPU",
      time: "01",
      city: "Ryzen 7 9800X3D",
      venue: "High-performance processor for rendering and production",
      status: "on-sale",
      image: "/venue-1.jpg",
      url: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html",
    },
    {
      id: 2,
      date: "GPU",
      time: "02",
      city: "RTX 5070Ti",
      venue: "Graphics powerhouse for creative workflows",
      status: "on-sale",
      image: "/venue-2.jpg",
      url: "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/",
    },
    {
      id: 3,
      date: "PERIPHERALS",
      time: "03",
      city: "Razer | Logitech | Steelseries",
      venue: "Precision gear for development and gaming",
      status: "on-sale",
      image: "/venue-3.jpg",
      url: "https://www.razer.com/gaming-keyboards/razer-huntsman-v3-pro-mini?color=white",
    },
    {
      id: 4,
      date: "AUDIO",
      time: "04",
      city: "Professional Mic & Mixer",
      venue: "Crystal clear sound for music production",
      status: "on-sale",
      image: "/venue-4.jpg",
      url: "https://fifinemicrophone.com/products/fifine-ampligame-am8-microphone",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/artist-portrait.jpg",
  portraitAlt: "ASERY - Janos Szilagyi",
  heroTitle: "ASERY",
  heroSubtitle: "Building Code | Creating Beats | Pushing Boundaries",
  artistLabel: "ARTIST",
  artistName: "Asery",
  artistSubtitle: "Developer | Music Producer | Content Creator",
  brandName: "ASERY",
  brandDescription: "I'm Jani, known as ASERY. I'm 19 years old from Nyíregyháza, Hungary. A high school developer mastering code and design. When I'm not coding, I'm producing music, streaming, or staying active. Passionate about turning creative ideas into reality across all disciplines.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Home", "About", "Setup", "Beats", "Contact"],
  contactTitle: "Get In Touch",
  emailLabel: "Email",
  email: "aseryesports@gmail.com",
  phoneLabel: "Location",
  phone: "Nyíregyháza, Hungary",
  addressLabel: "Education",
  address: "Nyíregyházi SZC Széchényi István Technikum",
  newsletterTitle: "Stay Connected",
  newsletterDescription: "Open a channel. Whether you seek to collaborate on projects or simply wish to communicate about development, music production, or creative work.",
  newsletterButtonText: "Connect",
  subscribeAlertMessage: "Thanks for reaching out! I'll get back to you soon.",
  copyrightText: "© 2025 ASERY. All rights reserved. Made with passion by Jani.",
  bottomLinks: ["Privacy", "Terms", "Cookies"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://instagram.com/szlgy_janos" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com/AseryTTV" },
    { icon: "youtube", label: "YouTube", href: "https://youtube.com/@aserycs" },
    { icon: "music", label: "Twitch", href: "https://twitch.tv/aserycs" },
  ],
  galleryImages: [
    { id: 1, src: "/footer-1.jpg" },
    { id: 2, src: "/footer-2.jpg" },
    { id: 3, src: "/footer-3.jpg" },
    { id: 4, src: "/footer-4.jpg" },
  ],
};

// -- Unused Sections (Stub Configs) -----------------------------------------
// These are template sections not currently used in the site
// Add config data here if you want to enable them

export const navigationConfig = { items: [] };
export const aboutConfig = { content: "" };
export const blogConfig = { posts: [] };
export const contactConfig = { content: "" };
export const faqConfig = { faqs: [] };
export const pricingConfig = { tiers: [] };
export const servicesConfig = { services: [] };
export const testimonialsConfig = { testimonials: [] };
export const worksConfig = { projects: [] };
