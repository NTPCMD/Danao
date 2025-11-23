import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

export function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Perth, Western Australia', 'Servicing Perth Metro'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['1800 676 767', 'Mon-Fri 6am-7pm'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@danaogroup.com', 'Response in 6-7 hours'],
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Mon-Fri: 6am-7pm', 'Weekend: By Appointment'],
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Danao Group
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#D4AF37] mx-auto w-32 mb-6"
          />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your multi-industry service needs.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section ref={ref} className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Information
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-[#0A0A0A] border border-gray-800 p-8 text-center hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(212,175,55,0.3)]"
                >
                  <div className="mb-4 flex justify-center">
                    <Icon className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {info.title}
                  </h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-400">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#0A0A0A] border-2 border-[#D4AF37] p-12 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Danao Group
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Danao Group is Perth's premier multi-industry service provider, delivering excellence across technology,
              logistics, property management, hospitality, events, and more. With our commitment to the Gold Standard, we
              ensure every client receives exceptional, tailored service.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our network of trusted partners and dedicated professionals work to meet your needs with
              precision, reliability, and care throughout Perth and Western Australia.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
