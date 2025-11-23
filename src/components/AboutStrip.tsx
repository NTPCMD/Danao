import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function AboutStrip() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left"
        />

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-4xl md:text-5xl">About Danao Group</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 leading-relaxed mb-6"
        >
          Danao Group is a multi-service organisation that coordinates and subcontracts through a premium network of specialist providers across Australia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          From digital and creative to logistics, property, hospitality, events, and retail—we bring together vetted professionals who deliver consistent quality under one trusted brand.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.8 }}
          className="h-1 bg-[#D4AF37] mt-8 origin-left"
        />
      </div>
    </section>
  );
}
