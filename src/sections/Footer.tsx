import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Twitter, Youtube, Music2, Mail, Phone, MapPin, ExternalLink, X } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_ICON_MAP = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  music: Music2,
};

const Footer = ({ onSetupClick }: { onSetupClick?: () => void }) => {
  // Null check: if config is empty, do not render
  if (!footerConfig.brandName && !footerConfig.heroTitle && footerConfig.socialLinks.length === 0) {
    return null;
  }

  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const POLICY_CONTENT = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">1. Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or engage with our content.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">2. How We Use Your Information</h3>
        <p>We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and send promotional communications with your consent.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">3. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">4. Third-Party Services</h3>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. Please review their privacy policies.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">5. Contact Us</h3>
        <p>If you have questions about our privacy practices, please contact us at aseryesports@gmail.com</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      content: `
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">1. User Agreement</h3>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">2. Intellectual Property Rights</h3>
        <p>Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">3. Limitations of Liability</h3>
        <p>In no event shall ASERY or its content providers be liable for any damages (including, without limitation, damages for loss of data or profit) arising from the use or inability to use the website.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">4. User Responsibilities</h3>
        <p>Users agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website. Prohibited behavior includes harassment, harm to minors, infringement of intellectual property rights, and more.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">5. Modifications</h3>
        <p>We reserve the right to modify these terms at any time. Continued use of the website following the posting of revised terms means that you accept and agree to the changes.</p>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      content: `
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">1. What Are Cookies</h3>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us recognize you and remember your preferences.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">2. Types of Cookies We Use</h3>
        <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled in our systems.</p>
        <p><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website and improve user experience.</p>
        <p><strong>Preference Cookies:</strong> These cookies remember your preferences to personalize your experience.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">3. Managing Cookies</h3>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">4. Third-Party Cookies</h3>
        <p>In some special cases we also use cookies provided by trusted third parties. These third party cookies are used for analytics and measuring the effectiveness of advertisements.</p>
        
        <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: bold;">5. More Information</h3>
        <p>For more information about cookies and how to disable them, visit: <a href="https://www.allaboutcookies.org" style="color: #06d6a0; text-decoration: underline;">www.allaboutcookies.org</a></p>
      `
    }
  };

  const handlePolicyClick = (policyName: string) => {
    if (policyName === 'Privacy') setActivePolicy('privacy');
    else if (policyName === 'Terms') setActivePolicy('terms');
    else if (policyName === 'Cookies') setActivePolicy('cookies');
  };

  // Prevent body scroll when modal is open and handle wheel scrolling
  useEffect(() => {
    if (activePolicy) {
      document.body.style.overflow = 'hidden';

      // Handle mouse wheel scrolling on modal
      const handleWheel = (e: WheelEvent) => {
        if (modalContentRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
          
          if (
            (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
            (e.deltaY < 0 && scrollTop > 0)
          ) {
            e.preventDefault();
            modalContentRef.current.scrollTop += e.deltaY;
          }
        }
      };

      document.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        document.removeEventListener('wheel', handleWheel);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePolicy]);

  const handleLinkClick = (linkName: string) => {
    const sectionMap: Record<string, string> = {
      Home: 'hero',
      About: 'about',
      Setup: 'tour',
      Beats: 'albums',
      Contact: 'contact',
    };

    if (linkName === 'Setup' && onSetupClick) {
      onSetupClick();
    } else {
      const sectionId = sectionMap[linkName];
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax title effect
      if (titleRef.current && portraitRef.current) {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (titleRef.current) {
              // Title moves faster than portrait
              gsap.set(titleRef.current, {
                y: -self.progress * 100,
              });
            }
          },
        });
        scrollTriggerRefs.current.push(st);
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      scrollTriggerRefs.current.forEach(st => st.kill());
      scrollTriggerRefs.current = [];
    };
  }, []);

  const handleContactClick = () => {
    if (footerConfig.subscribeAlertMessage) {
      alert(footerConfig.subscribeAlertMessage);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-void-black overflow-hidden"
    >
      {/* Artist portrait section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background portrait */}
        <div
          ref={portraitRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-[2/3] mx-auto">
            <img
              src={footerConfig.portraitImage}
              alt={footerConfig.portraitAlt}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-void-black via-transparent to-transparent opacity-50" />
          </div>
        </div>

        {/* Parallax title overlay */}
        <div
          ref={titleRef}
          className="relative z-10 text-center will-change-transform"
        >
          <h2 className="font-display text-[15vw] text-white leading-none tracking-tighter">
            {footerConfig.heroTitle}
          </h2>
          <p className="font-mono-custom text-lg text-neon-soft/60 uppercase tracking-[0.5em] mt-4">
            {footerConfig.heroSubtitle}
          </p>
        </div>

        {/* Artist name */}
        <div className="absolute bottom-20 left-12 z-20">
          <p className="font-mono-custom text-xs text-white/40 uppercase tracking-wider mb-2">
            {footerConfig.artistLabel}
          </p>
          <h3 className="font-display text-4xl text-white">{footerConfig.artistName}</h3>
          <p className="font-mono-custom text-sm text-neon-soft/60">{footerConfig.artistSubtitle}</p>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative bg-void-black py-20 px-6 md:px-12">
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Footer grid - Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                  <Music2 className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-display text-2xl text-white">{footerConfig.brandName}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {footerConfig.brandDescription}
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {footerConfig.socialLinks.map((social) => {
                  const IconComponent = SOCIAL_ICON_MAP[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.quickLinksTitle}
              </h4>
              <ul className="space-y-3">
                {footerConfig.quickLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-white/50 hover:text-neon-soft transition-colors flex items-center gap-2 group text-left"
                    >
                      <span>{link}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.contactTitle}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.emailLabel}</p>
                    <a href={`mailto:${footerConfig.email}`} className="text-sm text-white hover:text-neon-soft transition-colors">
                      {footerConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.phoneLabel}</p>
                    <span className="text-sm text-white">{footerConfig.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neon-soft/60 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{footerConfig.addressLabel}</p>
                    <span className="text-sm text-white">{footerConfig.address}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-sm uppercase tracking-wider text-white mb-6">
                {footerConfig.newsletterTitle}
              </h4>
              <p className="text-sm text-white/50 mb-4">
                {footerConfig.newsletterDescription}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-neon-cyan/50"
                />
                <button
                  onClick={handleContactClick}
                  className="px-4 py-3 bg-neon-cyan/20 text-neon-cyan rounded-lg text-sm font-medium hover:bg-neon-cyan/30 transition-colors"
                >
                  {footerConfig.newsletterButtonText}
                </button>
              </div>
            </div>
          </div>

          {/* Footer image grid */}
          {footerConfig.galleryImages.length > 0 && (
            <div className="mb-12">
              <p className="font-mono-custom text-xs text-white/30 uppercase tracking-wider mb-4">
                Gallery
              </p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {footerConfig.galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-square overflow-hidden rounded-lg footer-grid-item cursor-pointer"
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        hoveredImage === index ? 'scale-110 brightness-110' : 'brightness-75'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 font-mono-custom">
              {footerConfig.copyrightText}
            </p>
            <div className="flex gap-6">
              {footerConfig.bottomLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handlePolicyClick(link)}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setActivePolicy(null)}
        >
          <div 
            ref={modalContentRef}
            className="bg-void-dark border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              overflowY: 'auto',
              scrollBehavior: 'smooth'
            }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-8 border-b border-white/10 bg-void-dark z-10 flex-shrink-0">
              <h2 className="font-display text-2xl text-white">
                {POLICY_CONTENT[activePolicy].title}
              </h2>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-2 text-white/60 hover:text-white transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto flex-grow">
              <div
                className="text-white/70 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: POLICY_CONTENT[activePolicy].content }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-6 py-2 bg-neon-cyan text-void-black rounded-full text-sm font-medium hover:bg-neon-cyan/80 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Footer;
