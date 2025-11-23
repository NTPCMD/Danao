import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const serviceCategories = [
  { label: 'Danao Website Building', href: '/services#danao-website-building' },
  { label: 'Danao Digital & Creative', href: '/services#danao-digital-creative' },
  { label: 'Danao Logistics & Transport', href: '/services#danao-logistics-transport' },
  { label: 'Danao Property & Facilities', href: '/services#danao-property-facilities' },
  { label: 'Danao Business Support', href: '/services#danao-business-support' },
  { label: 'Danao Hospitality Services', href: '/services#danao-hospitality-services' },
  { label: 'Danao Events & Experiences', href: '/services#danao-events-experiences' },
  { label: 'Danao Concierge Services', href: '/services#danao-concierge-services' },
  { label: 'Danao Store Setup & Retail Ops', href: '/services#danao-store-setup-retail-ops' },
];

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <footer className="bg-black border-t border-gray-900 relative overflow-hidden" ref={ref}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF37] origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img
                src="/danao-logo.svg"
                alt="Danao Group logo"
                className="h-11 w-11 rounded-full bg-black border border-[#D4AF37] p-1 shadow-[0_0_20px_rgba(212,175,55,0.25)] object-contain"
              />
              <div className="leading-tight">
                <span className="block text-sm text-gray-300">The Danao Gold Standard</span>
                <span className="block text-xl font-semibold">Danao Group</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Premium multi-industry services across Australia, delivered with professional care and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Services
            </h3>
            <ul className="space-y-2">
              {serviceCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:1800676767" className="hover:text-[#D4AF37] transition-colors duration-300">
                  1800 676 767
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@danaogroup.com"
                  className="hover:text-[#D4AF37] transition-colors duration-300"
                >
                  info@danaogroup.com
                </a>
              </li>
              <li className="pt-2">
                <p>Perth, Western Australia</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-900 pt-8 text-center text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} Danao Group. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
