import { useEffect, useState } from 'react';
import { HeroCustom } from '../components/HeroCustom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BadgeCheck,
  Building2,
  Globe2,
  Palette,
  PartyPopper,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  ChevronDown,
  Sparkles,
  SparklesIcon,
  Bot,
} from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 'danao-website-building',
    title: 'Danao Website Building',
    description: 'Professional website development and digital solutions for businesses.',
    icon: Globe2,
    businesses: [
      'Custom Business Websites',
      'eCommerce Platforms',
      'Landing Page Development',
      'Website Maintenance & Support',
      'Domain & Hosting Management',
      'SEO Optimization',
    ],
  },
  {
    id: 'danao-digital-creative',
    title: 'Danao Digital & Creative',
    description: 'Creative design and branding services for your business identity.',
    icon: Palette,
    businesses: [
      'Brand Identity & Logo Design',
      'Social Media Content Creation',
      'Graphic Design Services',
      'Marketing Collateral',
      'Photography & Videography',
      'Content Marketing',
    ],
  },
  {
    id: 'danao-logistics-transport',
    title: 'Danao Logistics & Transport',
    description: 'Reliable transport and delivery coordination across Perth.',
    icon: Truck,
    businesses: [
      'Local Delivery Services',
      'Interstate Freight',
      'Stock Transfer Coordination',
      'Business Transport Solutions',
      'Warehousing Services',
      'Same-Day Courier',
    ],
  },
  {
    id: 'danao-property-facilities',
    title: 'Danao Property & Facilities',
    description: 'Complete property maintenance and facility management services.',
    icon: Building2,
    businesses: [
      'Facility Management',
      'Property Maintenance',
      'Installation Services',
      'Repair & Handyman Services',
      'Trade Coordination',
      'Building Inspections',
    ],
  },
  {
    id: 'danao-cleaning',
    title: 'Danao Cleaning',
    description: 'Professional cleaning services for commercial and residential properties.',
    icon: Sparkles,
    businesses: [
      'Office Cleaning',
      'Commercial Cleaning',
      'Residential Cleaning',
      'Deep Cleaning Services',
      'Carpet & Upholstery Cleaning',
      'Window Cleaning',
      'End of Lease Cleaning',
      'Sanitization Services',
    ],
  },
  {
    id: 'danao-administration',
    title: 'Danao Administration',
    description: 'Administrative and operational support for your business.',
    icon: BadgeCheck,
    businesses: [
      'Virtual Assistant Services',
      'Data Entry & Management',
      'Document Preparation',
      'Appointment Scheduling',
      'Email Management',
      'Back-Office Support',
    ],
  },
  {
    id: 'danao-accounting',
    title: 'Danao Accounting',
    description: 'Professional bookkeeping and accounting coordination.',
    icon: BadgeCheck,
    businesses: [
      'Bookkeeping Services',
      'Financial Reporting',
      'Invoice Management',
      'Payroll Coordination',
      'Tax Preparation Support',
      'Account Reconciliation',
    ],
  },
  {
    id: 'danao-ai-receptionist',
    title: 'Danao AI Receptionist',
    description: 'Advanced AI-powered reception and customer service solutions.',
    icon: Bot,
    businesses: [
      '24/7 Phone Answering',
      'Appointment Booking Automation',
      'Customer Inquiry Handling',
      'Call Routing & Transfer',
      'Message Taking & Forwarding',
      'Multi-Language Support',
      'CRM Integration',
    ],
  },
  {
    id: 'danao-hospitality',
    title: 'Danao Hospitality',
    description: 'Hospitality staffing and venue operations support.',
    icon: UtensilsCrossed,
    businesses: [
      'Wait Staff Coordination',
      'Bar Staff Services',
      'Kitchen Support',
      'Venue Setup & Operations',
      'FOH Management',
      'BOH Coordination',
    ],
  },
  {
    id: 'danao-events',
    title: 'Danao Events',
    description: 'Complete event coordination from setup to pack-down.',
    icon: PartyPopper,
    businesses: [
      'Event Planning & Coordination',
      'Setup & Pack-Down Services',
      'Equipment Rental Coordination',
      'On-Site Event Management',
      'Logistics & Transport',
      'Vendor Coordination',
    ],
  },
  {
    id: 'danao-retail',
    title: 'Danao Retail',
    description: 'Retail operations and store setup support services.',
    icon: ShoppingBag,
    businesses: [
      'Store Setup & Merchandising',
      'Pop-Up Store Coordination',
      'Retail Staff Support',
      'Visual Merchandising',
      'Inventory Management Support',
      'POS System Coordination',
    ],
  },
];

export function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [expandedService, setExpandedService] = useState<string | null>(null);
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

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <HeroCustom
        scrollY={scrollY}
        title="Our Services"
        subtitle="Professional multi-industry services coordinated through Danao Group."
        button1Text="Contact Us"
        button2Text="About Us"
        button1Href="/contact"
        button2Href="/about"
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
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Click on any service to explore the businesses within each line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group relative bg-[#0A0A0A] border-2 border-[#D4AF37] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-8 text-left transition-all duration-300 hover:bg-[#0A0A0A]/80"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-12 h-12 text-[#D4AF37]" />
                      <div className="h-px flex-1 bg-[#D4AF37]/40" />
                      <ChevronDown
                        className={`w-6 h-6 text-[#D4AF37] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t-2 border-[#D4AF37]"
                      >
                        <div className="p-8 bg-[#050505]">
                          <h4 className="text-[#D4AF37] mb-4 font-semibold uppercase tracking-wide text-sm">
                            Businesses in this line:
                          </h4>
                          <ul className="space-y-3">
                            {service.businesses.map((business, idx) => (
                              <motion.li
                                key={business}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <span className="mt-1.5 block h-2 w-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                                <span>{business}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none" />
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
