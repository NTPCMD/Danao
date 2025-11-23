import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, FileText } from 'lucide-react';

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
        <div className="w-[600px] h-[600px] rounded-full bg-[#C9A961] blur-[120px]" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-4xl md:text-6xl">Ready for the Gold Standard?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          The Danao concierge team will coordinate the right division, specialists, and timeline for your request.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <a
            href="tel:1300000000"
            className="group flex items-center gap-3 px-8 py-4 bg-[#C9A961] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.6)] hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Call</span>
          </a>
          <a
            href="mailto:concierge@danaogroup.com"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A961] text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-black hover:shadow-[0_0_30px_rgba(201,169,97,0.6)] hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="/contact"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A961] text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-black hover:shadow-[0_0_30px_rgba(201,169,97,0.6)] hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>Submit Request</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
