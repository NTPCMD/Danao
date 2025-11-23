import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Package, Building, Award, ShoppingBag, Sparkles } from 'lucide-react';

const additionalServices = [
  {
    title: 'Digital & Creative',
    icon: Palette,
    description: 'Web development, design, branding, and creative solutions',
  },
  {
    title: 'Logistics & Transport',
    icon: Package,
    description: 'Delivery, courier, freight, and transport coordination',
  },
  {
    title: 'Property & Facilities',
    icon: Building,
    description: 'Maintenance, repairs, cleaning, and facility management',
  },
  {
    title: 'Business & Corporate',
    icon: Award,
    description: 'Corporate services, consulting, and business support',
  },
  {
    title: 'Hospitality & Retail',
    icon: ShoppingBag,
    description: 'Staffing, operations, and retail support services',
  },
  {
    title: 'Events & Experiences',
    icon: Sparkles,
    description: 'Event planning, setup, coordination, and management',
  },
];

export function AdditionalServices() {
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
          <span className="text-4xl md:text-6xl text-white">Additional Services We Provide</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-[#0A0A0A] border border-gray-800 p-8 transition-all duration-300 hover:border-[#C9A961] hover:shadow-[0_4px_30px_rgba(201,169,97,0.3)]"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-[#C9A961] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>

                {/* Border reveal on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#C9A961] to-transparent" />
                  <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#C9A961] to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}