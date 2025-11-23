import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  'Website Development',
  'Event Setup',
  'Retail Staffing',
  'Corporate Logistics',
  'Property Maintenance',
  'Brand & Creative Solutions',
];

export function FeaturedScroller() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Duplicate the features array for seamless looping
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-6 pr-6"
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex-shrink-0 px-12 py-6 bg-black border border-[#C9A961] whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.5)]"
              >
                <span className="text-2xl text-white group-hover:text-[#C9A961] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}