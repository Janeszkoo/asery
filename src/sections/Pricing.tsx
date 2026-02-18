import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Check } from 'lucide-react';
import { pricingConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!pricingConfig.title || pricingConfig.experiences.length === 0) return null;

  const experiences = pricingConfig.experiences;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();

        // Title fade up
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' }
        );

        // Subtitle
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        );

        // Cards slide in from sides
        cardsRef.current.forEach((card, i) => {
          if (card) {
            const xOffset = i % 2 === 0 ? -80 : 80;
            
            tl.fromTo(
              card,
              {
                x: xOffset,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'expo.out',
              },
              `-=${0.6 - i * 0.15}`
            );

            // Details stagger
            const details = card.querySelectorAll('.detail-item');
            tl.fromTo(
              details,
              { x: -10, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power2.out',
              },
              '-=0.4'
            );
          }
        });
      },
      once: true,
    });
    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = cardsRef.current[index];
    if (!card) return;

    if (isEntering) {
      gsap.to(card, {
        y: -8,
        boxShadow: '0 20px 40px rgba(234, 0, 0, 0.15)',
        duration: 0.4,
        ease: 'expo.out',
      });
    } else {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-32 px-8 lg:px-16 bg-black overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-h1 lg:text-display-xl text-white font-medium mb-4"
          >
            {pricingConfig.title}
          </h2>
          <p ref={subtitleRef} className="text-body-lg text-white/60">
            {pricingConfig.subtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  willChange: 'transform, box-shadow',
                }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-highlight rounded-full md:-translate-x-1/2 z-10 mt-2" />
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-dark-gray p-6 lg:p-8 border border-white/10 hover:border-highlight/50 transition-colors duration-300">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 text-highlight text-body-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-h4 text-white font-medium mb-2">
                      {exp.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-body text-white/60 mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.description}
                    </p>
                    
                    {/* Details list */}
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="detail-item flex items-center gap-3 text-body-sm text-white/70"
                        >
                          <Check className="w-4 h-4 flex-shrink-0 text-highlight" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
