import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const reasons = [
  'Multi-industry coverage under one group',
  'Vetted specialist partners across all services',
  'Professional communication and coordination',
  'Luxury-level presentation and service',
  'Flexible, scalable support for businesses',
  'Single point of contact for all needs',
];

export function WhyChoose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-24 px-6 bg-black" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-4xl md:text-6xl text-white">Why Choose Danao</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#D4AF37] flex items-center justify-center transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <Check className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
              </div>
              <p className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
