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
    description: 'Professional website development and digital solutions for businesses.',
    bullets: [
      'Business websites and landing pages',
      'eCommerce platforms and online stores',
      'Website maintenance and updates',
      'Domain, hosting, and technical support',
    ],
    icon: Globe2,
  },
  {
    id: 'danao-digital-creative',
    title: 'Danao Digital & Creative',
    description: 'Creative design and branding services for your business identity.',
    bullets: [
      'Branding and logo design',
      'Social media content and graphics',
      'Marketing collateral and campaigns',
      'Photography and video production',
    ],
    icon: Palette,
  },
  {
    id: 'danao-logistics-transport',
    title: 'Danao Logistics & Transport',
    description: 'Reliable transport and delivery coordination across Australia.',
    bullets: [
      'Deliveries and courier services',
      'Stock transfers and freight',
      'Business transport coordination',
      'Warehousing and storage solutions',
    ],
    icon: Truck,
  },
  {
    id: 'danao-property-facilities',
    title: 'Danao Property & Facilities',
    description: 'Complete property maintenance and facility management services.',
    bullets: [
      'Cleaning and maintenance services',
      'Installations and basic repairs',
      'Facility management coordination',
      'Trade services and vendor coordination',
    ],
    icon: Building2,
  },
  {
    id: 'danao-business-support',
    title: 'Danao Business Support',
    description: 'Administrative and operational support for your business.',
    bullets: [
      'Admin and virtual assistance',
      'Back-office support services',
      'Basic bookkeeping coordination',
      'Project and document management',
    ],
    icon: BadgeCheck,
  },
  {
    id: 'danao-hospitality-services',
    title: 'Danao Hospitality Services',
    description: 'Hospitality staffing and venue operations support.',
    bullets: [
      'Staffing support and coordination',
      'Venue assistance and setup',
      'FOH and BOH operations',
      'Service training and management',
    ],
    icon: UtensilsCrossed,
  },
  {
    id: 'danao-events-experiences',
    title: 'Danao Events & Experiences',
    description: 'Complete event coordination from setup to pack-down.',
    bullets: [
      'Event setup and pack-down',
      'Logistics and transport coordination',
      'On-site management and support',
      'Equipment and venue coordination',
    ],
    icon: PartyPopper,
  },
  {
    id: 'danao-concierge-services',
    title: 'Danao Concierge Services',
    description: 'Personal and business concierge coordination services.',
    bullets: [
      'General request handling',
      'Coordinating across service lines',
      'Personal assistance services',
      'Business support coordination',
    ],
    icon: ConciergeBell,
  },
  {
    id: 'danao-store-setup-retail-ops',
    title: 'Danao Store Setup & Retail Ops',
    description: 'Retail operations and store setup support services.',
    bullets: [
      'Shop setup and merchandising',
      'Pop-up store coordination',
      'Retail team support',
      'Visual merchandising and displays',
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
        subtitle="Professional multi-industry services coordinated through Danao Group."
        button1Text="Contact Us"
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
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto" />
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
                  className="group relative bg-[#0A0A0A] border-2 border-[#D4AF37] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-12 h-12 text-[#D4AF37]" />
                    <div className="h-px flex-1 bg-[#D4AF37]/40" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
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
