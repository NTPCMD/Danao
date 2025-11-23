import { useEffect, useState } from 'react';
import { HeroCustom } from '../components/HeroCustom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BadgeCheck,
  Building2,
  ConciergeBell,
  Globe2,
  Palette,
  PartyPopper,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 'danao-website-building',
    title: 'Danao Website Building',
    description: 'Luxury-grade websites and landing pages engineered for conversion and brand impact.',
    bullets: [
      'Bespoke design systems and UI buildouts',
      'Conversion-ready landing pages and funnels',
      'Secure hosting, monitoring, and uptime care',
      'Analytics, CRO, and performance optimisation',
    ],
    icon: Globe2,
  },
  {
    id: 'danao-digital-creative',
    title: 'Danao Digital & Creative',
    description: 'Full creative studio support across brand, content, and campaigns.',
    bullets: [
      'Brand identity refresh and stewardship',
      'Campaign ideation, art direction, and rollout',
      'Photo, video, and content production',
      'Always-on social and performance creative',
    ],
    icon: Palette,
  },
  {
    id: 'danao-logistics-transport',
    title: 'Danao Logistics & Transport',
    description: 'Nationwide transport, freight, and white-glove deliveries under concierge oversight.',
    bullets: [
      'Linehaul, freight, and last-mile coordination',
      'White-glove setup and installation support',
      'Warehousing, storage, and inventory control',
      'Real-time updates and delivery assurance',
    ],
    icon: Truck,
  },
  {
    id: 'danao-property-facilities',
    title: 'Danao Property & Facilities',
    description: 'Premium property care with trusted trades, maintenance, and preventative programs.',
    bullets: [
      'Facility management and scheduled maintenance',
      'Cleaning, presentation, and onsite readiness',
      'Security coordination and access management',
      'Capex planning with vetted trades and suppliers',
    ],
    icon: Building2,
  },
  {
    id: 'danao-business-support',
    title: 'Danao Business Support',
    description: 'Executive-grade administration, project coordination, and PMO assistance.',
    bullets: [
      'Executive assistance and diary stewardship',
      'Project coordination and documentation',
      'Vendor sourcing and procurement support',
      'Reporting, dashboards, and compliance follow-up',
    ],
    icon: BadgeCheck,
  },
  {
    id: 'danao-hospitality-services',
    title: 'Danao Hospitality Services',
    description: 'End-to-end hospitality operations with impeccable guest experiences.',
    bullets: [
      'Venue setup, staffing, and service training',
      'Guest journey mapping and service recovery',
      'Menu launches, tastings, and supplier liaison',
      'Onsite management for premium events',
    ],
    icon: UtensilsCrossed,
  },
  {
    id: 'danao-events-experiences',
    title: 'Danao Events & Experiences',
    description: 'High-touch productions, launches, and corporate showcases with flawless delivery.',
    bullets: [
      'Concept, creative, and experiential design',
      'Venue sourcing, permits, and logistics',
      'AV, staging, and production management',
      'Onsite show-calling and guest services',
    ],
    icon: PartyPopper,
  },
  {
    id: 'danao-concierge-services',
    title: 'Danao Concierge Services',
    description: 'Personal and corporate concierge teams coordinating tasks across every division.',
    bullets: [
      'Lifestyle support, travel, and reservations',
      'Corporate concierge desks and VIP care',
      'Rapid request handling with vetted partners',
      'White-glove handover and follow-up',
    ],
    icon: ConciergeBell,
  },
  {
    id: 'danao-store-setup-retail-ops',
    title: 'Danao Store Setup & Retail Ops',
    description: 'Retail launches, visual merchandising, and operations managed end-to-end.',
    bullets: [
      'Store design liaison and fit-out oversight',
      'VM guides, planograms, and presentation',
      'Staffing, rostering, and service training',
      'Retail analytics, reporting, and optimisation',
    ],
    icon: ShoppingBag,
  },
];

export function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <HeroCustom
        scrollY={scrollY}
        title="Our Services"
        subtitle="Premium, multi-industry solutions coordinated through the Danao concierge desk."
        button1Text="Book Consultation"
        button2Text="Explore Concierge"
        button1Href="/contact"
        button2Href="/concierge"
      />

      <section ref={ref} className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Service Lines
            </h2>
            <div className="h-1 w-24 bg-[#C9A961] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group relative bg-[#0A0A0A] border-2 border-[#C9A961] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(201,169,97,0.4)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-12 h-12 text-[#C9A961]" />
                    <div className="h-px flex-1 bg-[#C9A961]/40" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#C9A961]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 border-2 border-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
