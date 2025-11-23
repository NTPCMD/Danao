import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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

const services = [
  {
    title: 'Danao Website Building',
    description: 'Business websites, landing pages, eCommerce platforms, and ongoing maintenance.',
    icon: Globe2,
    anchor: 'danao-website-building',
  },
  {
    title: 'Danao Digital & Creative',
    description: 'Branding, logo design, social media content, and creative campaigns.',
    icon: Palette,
    anchor: 'danao-digital-creative',
  },
  {
    title: 'Danao Logistics & Transport',
    description: 'Deliveries, stock transfers, business transport, and freight coordination.',
    icon: Truck,
    anchor: 'danao-logistics-transport',
  },
  {
    title: 'Danao Property & Facilities',
    description: 'Cleaning, maintenance, installations, repairs, and facility management.',
    icon: Building2,
    anchor: 'danao-property-facilities',
  },
  {
    title: 'Danao Business Support',
    description: 'Admin support, virtual assistance, back-office coordination, and bookkeeping.',
    icon: BadgeCheck,
    anchor: 'danao-business-support',
  },
  {
    title: 'Danao Hospitality Services',
    description: 'Staffing support, venue assistance, FOH/BOH operations, and service training.',
    icon: UtensilsCrossed,
    anchor: 'danao-hospitality-services',
  },
  {
    title: 'Danao Events & Experiences',
    description: 'Event setup and pack-down, logistics, on-site coordination, and production.',
    icon: PartyPopper,
    anchor: 'danao-events-experiences',
  },
  {
    title: 'Danao Concierge Services',
    description: 'General request handling, service coordination, and personal/business assistance.',
    icon: ConciergeBell,
    anchor: 'danao-concierge-services',
  },
  {
    title: 'Danao Store Setup & Retail Ops',
    description: 'Shop setup, merchandising, pop-ups, and retail team support.',
    icon: ShoppingBag,
    anchor: 'danao-store-setup-retail-ops',
  },
];

export function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-4xl md:text-6xl text-white">Services by Danao</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative"
              >
                <Link
                  to={`/services#${service.anchor}`}
                  className="block h-full bg-[#0A0A0A] border-2 border-[#D4AF37] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="w-12 h-12 text-[#D4AF37]" />
                    <div className="h-px flex-1 bg-[#D4AF37]/40" />
                  </div>
                  <h3 className="mb-3 text-white text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
