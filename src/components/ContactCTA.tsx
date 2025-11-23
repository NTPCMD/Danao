import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export function ContactCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-[#D4AF37] blur-[120px]" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-4xl md:text-6xl">Work With Danao Group</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Tell us what you need, and we'll handle the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <Link
            to="/contact"
            className="group px-10 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
          >
            Contact Us
          </Link>
          <Link
            to="/contact"
            className="group px-10 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
          >
            Send an Enquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
