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
          className="absolute top-0 left-0 right-0 h-1 bg-[#C9A961] origin-left"
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
          className="text-xl text-gray-300 leading-relaxed"
        >
          Danao Group delivers premium, concierge-led solutions across technology, logistics, property, hospitality, retail,
          and experiences. Every engagement is coordinated through a single trusted team who obsesses over detail, timing,
          and the Danao Gold Standard.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          className="h-1 bg-[#C9A961] mt-8 origin-left"
        />
      </div>
    </section>
  );
}
